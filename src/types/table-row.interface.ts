export interface MovingAverageValue {
  duration: number;
  history: number[];
  leads: number;
  bucketRange: number[];
  isInBucket: boolean;
}

export interface TableRow {
  instrumentToken: number;
  name: string;
  ltp: number;
  notificationsFired: number;
  closeHistory: number[];
  movingAverageValues: MovingAverageValue[];
}
