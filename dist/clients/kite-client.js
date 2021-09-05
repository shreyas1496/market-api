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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KiteClient = void 0;
// @ts-ignore
const kiteconnect_1 = require("kiteconnect");
const typedi_1 = require("typedi");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
let KiteClient = class KiteClient {
    constructor() {
        this.getLoginUrl = () => {
            return this.instance.getLoginURL();
        };
        this.startKiteServer = async (requestToken, seedData, onTicks) => {
            let accessToken;
            // generate session and init ticker
            return this.generateSession(requestToken)
                .then(({ response }) => {
                accessToken = response.access_token;
                return seedData();
            })
                .catch(utils_1.errorHandler(" SEED error"))
                .then(() => this.initTicker(accessToken, onTicks))
                .catch(utils_1.errorHandler("KSS catch"));
        };
        this.getDailyHistoricalData = (instToken, index, days = 130) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const today = new Date();
                    const from = new Date(new Date().setDate(today.getDate() - days));
                    // console.log(to, from);
                    // return Promise.resolve({ to, from });
                    return resolve(this.instance
                        .getHistoricalData(instToken, "day", from, today, true)
                        .then((result) => result.reverse()));
                }, 450 * index);
            });
        };
        this.generateSession = (requestToken) => {
            return new Promise((resolve, reject) => {
                this.instance
                    .generateSession(requestToken, process.env.API_SECRET)
                    .then(function (response) {
                    return resolve({ response });
                })
                    .catch(function (err) {
                    console.log(err);
                    reject(err);
                });
            });
        };
        this.initTicker = async (accessToken, onTicks) => {
            this.ticker = new kiteconnect_1.KiteTicker({
                api_key: process.env.API_KEY,
                access_token: accessToken,
            });
            const items = Object.values(constants_1.SCRIPTS);
            console.log(items);
            this.ticker.autoReconnect(true, 10, 20);
            this.ticker.on("ticks", (ticks) => {
                onTicks(ticks.map(({ instrument_token, last_price, ...others }) => ({
                    ...others,
                    instrumentToken: instrument_token,
                    lastPrice: last_price,
                })));
            });
            this.ticker.on("connect", () => {
                this.ticker.subscribe(items);
                this.ticker.setMode(this.ticker.modeLTP, items);
            });
            this.ticker.on("error", utils_1.errorHandler("Ticker error"));
            this.ticker.on("disconnect", utils_1.errorHandler("Ticker disconnect"));
            this.ticker.on("noreconnect", utils_1.errorHandler("Ticker noreconnect"));
            this.ticker.connect();
        };
        this.instance = new kiteconnect_1.KiteConnect({ api_key: process.env.API_KEY });
    }
};
KiteClient = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], KiteClient);
exports.KiteClient = KiteClient;
//# sourceMappingURL=kite-client.js.map