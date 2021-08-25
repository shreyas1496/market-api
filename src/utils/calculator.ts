import { HistRes, KiteClient } from "~/clients";
import { SCRIPTS } from "~/constants";
import { Comparison } from "~/types";
export class Calculator {
  kite: KiteClient;

  constructor(kite: KiteClient) {
    this.kite = kite;
  }

  getData = async () => {
    const table = await Promise.all(
      Object.entries(SCRIPTS).map(([name, token], index) => {
        return this.kite.getDailyHistoricalData(token, index).then((res) => ({
          data: res,
          name,
        }));
      })
    );

    return table.map(({ data, name }) => {
      return {
        name,
        ltp: data?.[0]?.close,
        prevClose: data?.[1]?.close,
        ma44: this.actualAvg(44, data),
        ma20: this.actualAvg(20, data),
        ma10: this.actualAvg(10, data),
      };
    });
  };

  private avg(duration: number, data: HistRes[]): Comparison {
    const ltp = data?.[0]?.close ?? 1;
    const range = data.slice(0, duration).map(({ close }) => close);
    const sum = range.reduce((acc, value) => acc + value, 0);
    const average = sum / duration;
    const diff = Math.abs(average - ltp);

    const closeness = (diff / ltp) * 100;

    return {
      average,
      diff,
      closeness,
    };
  }

  private actualAvg(duration: number, data: HistRes[]): number {
    return this.avg(duration, data).average;
  }
}
