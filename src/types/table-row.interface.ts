export interface MovingAverageValue {
  duration: number;
  history: number[];
  leads: number;
}

export interface TableRow {
  instrumentToken: number;
  name: string;
  ltp: number;
  closeHistory: number[];
  movingAverageValues: MovingAverageValue[];
}
