import { HistRes, KiteClient } from "./clients";
import { Comparison } from "./types";
import { orderBy } from "lodash";
export class Calculator {
  kite: KiteClient;

  TOKENS: Record<string, string> = {
    RELIANCE21AUGFUT: "12863746",
    BANKNIFTY: "12476930",
    BAJFINANCE21SEPFUT: "12798210",
  };

  constructor(kite: KiteClient) {
    this.kite = kite;
  }
  getData = async () => {
    const table = await Promise.all(
      Object.entries(this.TOKENS).map(([name, token]) => {
        return this.kite.getDailyHistoricalData(token).then((res) => ({
          data: res,
          name,
        }));
      })
    );

    const avtTable = table.map(({ data, name }) => {
      return {
        name,
        ltp: data[0].close,
        ma44: this.avg(44, data),
        ma10: this.avg(10, data),
        ma5: this.avg(5, data),
      };
    });

    return orderBy(avtTable, "ma44.closeness", "asc");
  };

  private avg(duration: number, data: HistRes[]): Comparison {
    const ltp = data[0].close;
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
}
