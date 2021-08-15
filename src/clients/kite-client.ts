// @ts-ignore
import { KiteConnect } from "kiteconnect";
import { kill } from "process";

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

export class KiteClient {
  instance: any;

  constructor() {}

  getLoginUrl = (): string => {
    this.instance = new KiteConnect({ api_key: process.env.API_KEY });
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
    days: number = 60
  ): Promise<any> => {
    const to = new Date();
    const from = new Date(new Date().setDate(to.getDate() - days));
    console.log(to, from);

    // return Promise.resolve({ to, from });
    return this.instance.getHistoricalData(instToken, "day", from, to, true);
  };
}
