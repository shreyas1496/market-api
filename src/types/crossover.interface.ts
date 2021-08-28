import { MovingAverageType } from "./moving-average-type.enum";

export interface Crossover {
  name: string;
  type: MovingAverageType;
  value: number;
}
