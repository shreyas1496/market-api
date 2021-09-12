"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ActiveUsers_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveUsers = void 0;
const typedi_1 = require("typedi");
let ActiveUsers = ActiveUsers_1 = class ActiveUsers {
    constructor() {
        this.liveMap = {};
        this.add = (token) => {
            var _a;
            const currentScore = (_a = this.liveMap[token]) !== null && _a !== void 0 ? _a : 0;
            if (token) {
                this.liveMap[token] =
                    currentScore < ActiveUsers_1.MAX_SCORE
                        ? currentScore + 1
                        : ActiveUsers_1.MAX_SCORE;
            }
        };
        this.decrementScore = () => {
            const newMap = {};
            Object.entries(this.liveMap).forEach(([token, score]) => {
                if (score > 1) {
                    newMap[token] = score - 1;
                }
            });
            this.liveMap = newMap;
        };
        this.removeToken = (token) => {
            if (token) {
                delete this.liveMap[token];
            }
        };
        this.getActive = () => {
            return Object.keys(this.liveMap).filter((token) => !!token);
        };
        this._init = () => {
            setInterval(this.decrementScore, ActiveUsers_1.DECREMENT_AFTER);
        };
        this._init();
    }
};
ActiveUsers.MAX_SCORE = 24;
ActiveUsers.DECREMENT_AFTER = 60 * 60 * 1000;
ActiveUsers = ActiveUsers_1 = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], ActiveUsers);
exports.ActiveUsers = ActiveUsers;
//# sourceMappingURL=active-users.js.map