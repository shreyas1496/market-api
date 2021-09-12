import { TableRow } from ".";

export enum MessageType {
  TEST = "test",
  DIRECTION_CROSSOVER = "direction-crossover",
  MA_CLOSENESS = "ma-closeness",
}

export interface MessageOptions {
  type: MessageType;
  title?: string;
  body?: string;
  ma?: {
    duration: number;
    isInBucket: boolean;
    data: TableRow;
    isAbove: boolean;
    leads: number;
  };
}

export interface MessagingService {
  send: (options: MessageOptions) => Promise<void>;
}
