import EventEmitter from "events";
import { ACTIVE_USER_CLEANUP_EVENT } from "~/constants";

export class ActiveUsers {
  private liveMap: Record<string, number> = {};
  static MAX_SCORE = 12;

  constructor(emitter: EventEmitter) {
    emitter.on(ACTIVE_USER_CLEANUP_EVENT, this.decrementScore);
  }

  add = (token: string) => {
    const currentScore = this.liveMap[token] ?? 0;
    this.liveMap[token] =
      currentScore < ActiveUsers.MAX_SCORE
        ? currentScore + 1
        : ActiveUsers.MAX_SCORE;
  };

  decrementScore = () => {
    const newMap: Record<string, number> = {};
    Object.entries(this.liveMap).forEach(([token, score]) => {
      if (score > 1) {
        newMap[token] = score - 1;
      }
    });
    this.liveMap = newMap;
  };

  getActive = (): string[] => {
    return Object.keys(this.liveMap);
  };
}
