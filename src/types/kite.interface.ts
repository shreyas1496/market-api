export interface LoginSuccess {
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

export interface KiteTick {
  tradable: boolean;
  mode: "full" | "ltp";
  instrumentToken: number;
  lastPrice: number;
}
