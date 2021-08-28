import { Service } from "typedi";

@Service()
export class ActiveUsers {
  private liveMap: Record<string, number> = {};
  static MAX_SCORE = 12;
  static DECREMENT_AFTER = 60 * 60 * 1000;

  constructor() {
    this._init();
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

  _init = () => {
    setInterval(this.decrementScore, ActiveUsers.DECREMENT_AFTER);
  };
}