import _range from "lodash/range";
import { Inject, Service } from "typedi";
import { KiteClient } from "~/clients";
import { SCRIPTS } from "~/constants";
import {
  KiteTick,
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

  data = () => formatResponseForUI(Calculator.instrumentTableRowMap);

  startServer = async (requestToken: string): Promise<void> => {
    return this.kite
      .startKiteServer(requestToken, this.seedData, this.onTicks)
      .catch(console.log);
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
    console.log("seeding complete");
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

        return {
          duration,
          history,
          leads,
        };
      }
    );

    return {
      instrumentToken,
      name,
      ltp,
      closeHistory,
      movingAverageValues,
    };
  };

  private onTicks = (ticks: KiteTick[]): void => {
    ticks.forEach(({ instrumentToken, lastPrice }) => {
      const entry = Calculator.instrumentTableRowMap[instrumentToken];
      if (entry) {
        entry.ltp = lastPrice;
      }
    });
  };
}
