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
}
