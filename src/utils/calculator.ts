import _range from "lodash/range";
import _clone from "lodash/cloneDeep";
import { Inject, Service } from "typedi";
import { KiteClient } from "~/clients";
import {
  CLOSENESS_FACTOR,
  MAX_NOTIFICATION_PER_STOCK_PER_DAY,
  SCRIPTS,
  SILENCE_FOR_MS,
  TICKS_WARMUP_DELAY,
} from "~/constants";
import { FCMService } from "~/services";
import {
  KiteTick,
  MessageType,
  movingAverageDurations,
  MovingAverageValue,
  TableRow,
} from "~/types";
import { formatResponseForUI } from ".";

@Service()
export class Calculator {
  static instrumentTableRowMap: Record<number, TableRow> = {};

  @Inject(() => KiteClient)
  private kite!: KiteClient;

  @Inject(() => FCMService)
  private notificationService!: FCMService;

  private isWarmingUpCache: boolean = false;

  data = () => formatResponseForUI(Calculator.instrumentTableRowMap);

  rawData = () => Calculator.instrumentTableRowMap;

  startServer = async (requestToken: string): Promise<void> => {
    try {
      this.isWarmingUpCache = true;
      await this.kite.startKiteServer(
        requestToken,
        this.seedData,
        this.onTicks
      );
    } catch (error) {
      console.error(error);
    } finally {
      this.isWarmingUpCache = false;
      setTimeout(() => {
        this.isWarmingUpCache = false;
      }, TICKS_WARMUP_DELAY);
    }
  };

  private seedData = async (): Promise<void> => {
    const raw = await Promise.all(
      Object.entries(SCRIPTS).map(([name, instrumentToken], index) => {
        return this.kite
          .getDailyHistoricalData(instrumentToken, index)
          .then((res) => ({
            data: res,
            name,
            instrumentToken,
          }));
      })
    );

    raw.forEach(({ data, name, instrumentToken }) => {
      const closeHistory = data.map((hist) => hist.close);
      Calculator.instrumentTableRowMap[instrumentToken] = this.getTableRow(
        instrumentToken,
        name,
        closeHistory
      );
    });
  };

  private getTableRow = (
    instrumentToken: number,
    name: string,
    closeHistory: number[]
  ): TableRow => {
    const ltp = closeHistory[0] ?? 1;
    const movingAverageValues = movingAverageDurations.map<MovingAverageValue>(
      (duration) => {
        const history: number[] = [];
        let counter = 0;
        let leads = 0;

        while (counter < duration) {
          const sum = closeHistory
            .slice(counter, counter + duration)
            .reduce((a, b) => a + b, 0);

          const avg = sum / duration;
          history.push(avg);
          if ((closeHistory[counter] as number) > avg) {
            leads++;
          }
          counter++;
        }

        const movingAverage = history[0] as number;
        const deviation = Math.abs(movingAverage * CLOSENESS_FACTOR);
        const left = movingAverage - deviation;
        const right = movingAverage + deviation;
        const range = [left, right];

        return {
          duration,
          leads,
          isInBucket: this.isInBucket(ltp, range),
          bucketRange: range,
          history,
        };
      }
    );

    return {
      instrumentToken,
      name,
      ltp,
      notificationsFired: 0,
      fireAfter: 0,
      closeHistory,
      movingAverageValues,
    };
  };

  private onTicks = (ticks: KiteTick[]): void => {
    ticks.forEach(({ instrumentToken, lastPrice }) => {
      const entry = Calculator.instrumentTableRowMap[instrumentToken];
      if (entry) {
        entry.ltp = lastPrice;
        if (entry.notificationsFired < MAX_NOTIFICATION_PER_STOCK_PER_DAY) {
          Calculator.instrumentTableRowMap[instrumentToken] =
            this.lookupForNotification(lastPrice, entry);
        }
      }
    });
  };

  private isInBucket = (ltp: number, range: number[]) => {
    const [left, right] = range;
    return ltp > (left as number) && ltp < (right as number);
  };

  private lookupForNotification = (ltp: number, entry: TableRow): TableRow => {
    const newEntry = _clone(entry);
    const now = Date.now();
    newEntry.movingAverageValues = entry.movingAverageValues.map((block) => {
      const { bucketRange, isInBucket, duration, history, leads } = block;
      const latestIsInBucket = this.isInBucket(ltp, bucketRange);
      const shouldFire = now > entry.fireAfter;
      const isDirectionChanged = latestIsInBucket !== isInBucket;

      if (
        !this.isWarmingUpCache &&
        isDirectionChanged &&
        shouldFire &&
        this.fulfillsLeadsCriteria(block, ltp)
      ) {
        newEntry.notificationsFired++;
        newEntry.fireAfter = now + SILENCE_FOR_MS;
        const movingAverageValue = history[0] ?? 0;
        console.log(
          new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
          entry.name,
          ltp,
          movingAverageValue,
          duration,
          latestIsInBucket,
          leads
        );

        this.notificationService.send({
          ma: {
            data: entry,
            duration,
            isInBucket: latestIsInBucket,
            isAbove: ltp > movingAverageValue,
            leads,
          },
          type: MessageType.MA_CLOSENESS,
        });
      }

      return {
        duration,
        leads,
        isInBucket: latestIsInBucket,
        bucketRange,
        history,
      };
    });

    return newEntry;
  };

  private fulfillsLeadsCriteria = (
    block: MovingAverageValue,
    ltp: number
  ): boolean => {
    const maValue = block.history[0] ?? 0;
    const maLeads = block.leads ?? 0;
    const maDurationHalf = (block.duration ?? 0) / 2;

    return ltp > maValue ? maLeads > maDurationHalf : maLeads < maDurationHalf;
  };
}
