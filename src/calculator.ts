import { KiteClient } from "./clients";

export class Calculator {
  kite: KiteClient;
  constructor(kite: KiteClient) {
    this.kite = kite;
  }
  getData = () => {
    return this.kite.getDailyHistoricalData("abc");
  };
}
