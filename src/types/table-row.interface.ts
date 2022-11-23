import { HistRes } from "./kite.interface";

export interface MovingAverageValue {
  duration: number;
  leads: number;
  isInBucket: boolean;
  bucketRange: number[];
  history: number[];
}

export interface TableRow {
  instrumentToken: number;
  name: string;
  ltp: number;
  notificationsFired: number;
  fireAfter: number;
  closeHistory: number[];
  movingAverageValues: MovingAverageValue[];
}


export interface ProcessRow { data: HistRes[]; name: string; instrumentToken: number }