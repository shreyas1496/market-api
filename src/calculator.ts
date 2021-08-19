import { HistRes, KiteClient } from "./clients";
import { Comparison } from "./types";
import { orderBy } from "lodash";
export class Calculator {
  kite: KiteClient;

  TOKENS: Record<string, string> = {
    ADANIPORTS21SEPFUT: "12485634",
    ASIANPAINT21SEPFUT: "12492546",
    AXISBANK21SEPFUT: "12493314",
    BajajAUTO21SEPFUT: "12496130",
    BAJAJFINSV21SEPFUT: "12496386",
    BAJFINANCE21SEPFUT: "12798210",
    BANKNIFTY: "12476930",
    BHARTIARTL: "12503298",
    BPCL: "12507394",
    BRITANNIA: "12507650",
    CIPLA: "12508674",
    COALINDIA: "12508930",
    DIVISLAB: "12518914",
    DRREDDY: "12521730",
    EICHERMOT: "12525314",
    GRASIM: "12531202",
    HCLTECH: "12531970",
    HDFC: "12532226",
    HDFCBANK: "12532738",
    HDFCLIFE: "12532994",
    HEROMOTOCO: "12533250",
    HINDUNILVR: "12534530",
    HINDALCO: "12533506",
    ICICIBANK: "12535042",
    INDUSINDBK: "12537602",
    INFY: "12538114",
    IOC: "12538370",
    ITC: "12538882",
    JSWSTEEL: "12539906",
    KOTAKBANK: "12540418",
    LT: "12541442",
    M_AND_M: "12542466",
    MARUTI: "12543490",
    NESTLEIND: "12553218",
    NIFTY: "12477442",
    NTPC: "12553730",
    ONGC: "12553986",
    POWERGRID: "12556290",
    RELIANCE: "12557570",
    SBILIFE: "12558082",
    SBIN: "12558338",
    SHREECEM: "12558594",
    SUNPHARMA: "12559618",
    TATACONSUM: "12560386",
    TATAMOTORS: "12560642",
    TATASTEEL: "12561154",
    TCS: "12568834",
    TECHM: "12569090",
    TITAN: "12569346",
    ULTRACEMCO: "12570882",
    UPL: "12571138",
    WIPRO: "12572930",
  };

  constructor(kite: KiteClient) {
    this.kite = kite;
  }

  getData = async () => {
    const table = await Promise.all(
      Object.entries(this.TOKENS).map(([name, token], index) => {
        return this.kite.getDailyHistoricalData(token, index).then((res) => ({
          data: res,
          name,
        }));
      })
    );

    return table.map(({ data, name }) => {
      return {
        name,
        ltp: data[0].close,
        ma44: this.avg(44, data),
        ma20: this.avg(20, data),
        ma10: this.avg(10, data),
      };
    });
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
