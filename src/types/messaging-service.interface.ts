import { TableRow } from ".";

export enum MessageType {
  TEST = "test",
  DIRECTION_CROSSOVER = "direction-crossover",
  MA_CROSSOVER = "ma-crossover",
}

export interface MessagingService {
  send: (name: string, type: MessageType, data?: TableRow) => Promise<void>;
}
