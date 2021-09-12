// @ts-ignore
import { KiteConnect, KiteTicker } from "kiteconnect";
import { Service } from "typedi";
import { SCRIPTS } from "~/constants";
import { HistRes, KiteTick, LoginSuccess } from "~/types";
import { errorHandler } from "~/utils";

@Service()
export class KiteClient {
  instance: any;
  ticker: any;

  constructor() {
    this.instance = new KiteConnect({ api_key: process.env.API_KEY });
  }

  getLoginUrl = (): string => {
    return this.instance.getLoginURL();
  };

  startKiteServer = async (
    requestToken: string,
    seedData: () => Promise<void>,
    onTicks: (ticks: KiteTick[]) => unknown
  ): Promise<void> => {
    let accessToken: string;
    // generate session and init ticker
    return this.generateSession(requestToken)
      .then(({ response }) => {
        accessToken = response.access_token;
        return seedData();
      })
      .catch(errorHandler(" SEED error"))
      .then(() => this.initTicker(accessToken, onTicks))
      .catch(errorHandler("KSS catch"));
  };

  getDailyHistoricalData = (
    instToken: number,
    index: number,
    days: number = 130
  ): Promise<HistRes[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const today = new Date();
        const from = new Date(new Date().setDate(today.getDate() - days));

        return resolve(
          this.instance
            .getHistoricalData(instToken, "day", from, today, true)
            .then((result: HistRes[]) => result.reverse())
        );
      }, 450 * index);
    });
  };

  private generateSession = (requestToken: string): Promise<LoginSuccess> => {
    return new Promise((resolve, reject) => {
      this.instance
        .generateSession(requestToken, process.env.API_SECRET)
        .then(function (response: LoginSuccess["response"]) {
          return resolve({ response });
        })
        .catch(function (err: unknown) {
          console.error(err);
          reject(err);
        });
    });
  };

  private initTicker = async (
    accessToken: string,
    onTicks: (ticks: KiteTick[]) => unknown
  ): Promise<void> => {
    this.ticker = new KiteTicker({
      api_key: process.env.API_KEY,
      access_token: accessToken,
    });
    const items = Object.values(SCRIPTS);

    this.ticker.autoReconnect(true, 10, 20);
    this.ticker.on("ticks", (ticks: RawTick[]) => {
      onTicks(
        ticks.map(({ instrument_token, last_price, ...others }) => ({
          ...others,
          instrumentToken: instrument_token,
          lastPrice: last_price,
        }))
      );
    });
    this.ticker.on("connect", () => {
      this.ticker.subscribe(items);
      this.ticker.setMode(this.ticker.modeLTP, items);
    });

    this.ticker.on("error", errorHandler("Ticker error"));
    this.ticker.on("disconnect", errorHandler("Ticker disconnect"));
    this.ticker.on("noreconnect", errorHandler("Ticker noreconnect"));
    this.ticker.connect();
  };
}

interface RawTick {
  tradable: boolean;
  mode: "full" | "ltp";
  instrument_token: number;
  last_price: number;
}
