import EventEmitter from "events";
import { LTP_CROSSOVER_EVENT } from "~/constants";
import { Crossover } from "~/types";

export const crossoverHandler = (eventEmitter: EventEmitter) => {
  eventEmitter.on(LTP_CROSSOVER_EVENT, ({ name, type, value }: Crossover) => {
    console.log(LTP_CROSSOVER_EVENT, name, type, value);
  });
};
