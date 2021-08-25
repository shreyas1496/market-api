// @ts-ignore
import { KiteConnect } from "kiteconnect";

interface LoginSuccess {
  response: {
    user_type: string;
    email: string;
    user_name: string;
    user_shortname: string;
    broker: string;
    exchanges: string[];
    products: string[];
    order_types: string[];
    user_id: string;
    api_key: string;
    access_token: string;
    public_token: string;
    refresh_token: string;
  };
}

export interface HistRes {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export class KiteClient {
  instance: any;

  constructor() {
    this.instance = new KiteConnect({ api_key: process.env.API_KEY });
  }

  getLoginUrl = (): string => {
    return this.instance.getLoginURL();
  };

  generateSession = (requestToken: string): Promise<LoginSuccess> => {
    return new Promise((resolve, reject) => {
      this.instance
        .generateSession(requestToken, process.env.API_SECRET)
        .then(function (response: LoginSuccess["response"]) {
          return resolve({ response });
        })
        .catch(function (err: unknown) {
          console.log(err);
          reject(err);
        });
    });
  };

  getProfile = (): Promise<unknown> => this.instance.getProfile();

  getDailyHistoricalData = (
    instToken: string,
    index: number,
    days: number = 100
  ): Promise<HistRes[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const today = new Date();
        const to = new Date(today.setDate(today.getDate() + 1));
        const from = new Date(new Date().setDate(to.getDate() - days));
        // console.log(to, from);

        // return Promise.resolve({ to, from });
        return resolve(
          this.instance
            .getHistoricalData(instToken, "day", from, to, true)
            .then((result: HistRes[]) => result.reverse())
        );
      }, 450 * index);
    });
  };
}
