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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Calculator_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
const typedi_1 = require("typedi");
const clients_1 = require("../clients");
const constants_1 = require("../constants");
const services_1 = require("../services");
const types_1 = require("../types");
const _1 = require(".");
let Calculator = Calculator_1 = class Calculator {
    constructor() {
        this.isWarmingUpCache = false;
        this.data = () => _1.formatResponseForUI(Calculator_1.instrumentTableRowMap);
        this.rawData = () => Calculator_1.instrumentTableRowMap;
        this.startServer = async (requestToken) => {
            try {
                this.isWarmingUpCache = true;
                await this.kite.startKiteServer(requestToken, this.seedData, this.onTicks);
            }
            catch (error) {
                console.error(error);
            }
            finally {
                this.isWarmingUpCache = false;
                setTimeout(() => {
                    this.isWarmingUpCache = false;
                }, constants_1.TICKS_WARMUP_DELAY);
            }
        };
        this.seedData = async () => {
            const raw = await Promise.all(Object.entries(constants_1.SCRIPTS).map(([name, instrumentToken], index) => {
                return this.kite
                    .getDailyHistoricalData(instrumentToken, index)
                    .then((res) => ({
                    data: res,
                    name,
                    instrumentToken,
                })).catch(e => {
                    console.error('error in fetching', name, instrumentToken, e);
                    return null;
                });
            }));
            const raw2 = raw.filter(x => x !== null);
            raw2.forEach(({ data, name, instrumentToken }) => {
                const closeHistory = data.map((hist) => hist.close);
                Calculator_1.instrumentTableRowMap[instrumentToken] = this.getTableRow(instrumentToken, name, closeHistory);
            });
        };
        this.getTableRow = (instrumentToken, name, closeHistory) => {
            var _a;
            const ltp = (_a = closeHistory[0]) !== null && _a !== void 0 ? _a : 1;
            const movingAverageValues = types_1.movingAverageDurations.map((duration) => {
                const history = [];
                let counter = 0;
                let leads = 0;
                while (counter < duration) {
                    const sum = closeHistory
                        .slice(counter, counter + duration)
                        .reduce((a, b) => a + b, 0);
                    const avg = sum / duration;
                    history.push(avg);
                    if (closeHistory[counter] > avg) {
                        leads++;
                    }
                    counter++;
                }
                const movingAverage = history[0];
                const deviation = Math.abs(movingAverage * constants_1.CLOSENESS_FACTOR);
                const left = movingAverage - deviation;
                const right = movingAverage + deviation;
                const range = [left, right];
                return {
                    duration,
                    leads,
                    isInBucket: this.isInBucket(ltp, range),
                    bucketRange: range,
                    history,
                };
            });
            return {
                instrumentToken,
                name,
                ltp,
                notificationsFired: 0,
                fireAfter: 0,
                closeHistory,
                movingAverageValues,
            };
        };
        this.onTicks = (ticks) => {
            ticks.forEach(({ instrumentToken, lastPrice }) => {
                const entry = Calculator_1.instrumentTableRowMap[instrumentToken];
                if (entry) {
                    entry.ltp = lastPrice;
                    if (entry.notificationsFired < constants_1.MAX_NOTIFICATION_PER_STOCK_PER_DAY) {
                        Calculator_1.instrumentTableRowMap[instrumentToken] =
                            this.lookupForNotification(lastPrice, entry);
                    }
                }
            });
        };
        this.isInBucket = (ltp, range) => {
            const [left, right] = range;
            return ltp > left && ltp < right;
        };
        this.lookupForNotification = (ltp, entry) => {
            const newEntry = cloneDeep_1.default(entry);
            const now = Date.now();
            newEntry.movingAverageValues = entry.movingAverageValues.map((block) => {
                var _a;
                const { bucketRange, isInBucket, duration, history, leads } = block;
                const latestIsInBucket = this.isInBucket(ltp, bucketRange);
                const shouldFire = now > entry.fireAfter;
                const isDirectionChanged = latestIsInBucket !== isInBucket;
                if (!this.isWarmingUpCache &&
                    isDirectionChanged &&
                    shouldFire &&
                    this.fulfillsLeadsCriteria(block, ltp)) {
                    newEntry.notificationsFired++;
                    newEntry.fireAfter = now + constants_1.SILENCE_FOR_MS;
                    const movingAverageValue = (_a = history[0]) !== null && _a !== void 0 ? _a : 0;
                    console.log(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }), entry.name, ltp, movingAverageValue, duration, latestIsInBucket, leads);
                    this.notificationService.send({
                        ma: {
                            data: entry,
                            duration,
                            isInBucket: latestIsInBucket,
                            isAbove: ltp > movingAverageValue,
                            leads,
                        },
                        type: types_1.MessageType.MA_CLOSENESS,
                    });
                }
                return {
                    duration,
                    leads,
                    isInBucket: latestIsInBucket,
                    bucketRange,
                    history,
                };
            });
            return newEntry;
        };
        this.fulfillsLeadsCriteria = (block, ltp) => {
            var _a, _b, _c;
            const maValue = (_a = block.history[0]) !== null && _a !== void 0 ? _a : 0;
            const maLeads = (_b = block.leads) !== null && _b !== void 0 ? _b : 0;
            const maDurationHalf = ((_c = block.duration) !== null && _c !== void 0 ? _c : 0) / 2;
            return ltp > maValue ? maLeads > maDurationHalf : maLeads < maDurationHalf;
        };
    }
};
Calculator.instrumentTableRowMap = {};
__decorate([
    typedi_1.Inject(() => clients_1.KiteClient),
    __metadata("design:type", clients_1.KiteClient)
], Calculator.prototype, "kite", void 0);
__decorate([
    typedi_1.Inject(() => services_1.FCMService),
    __metadata("design:type", services_1.FCMService)
], Calculator.prototype, "notificationService", void 0);
Calculator = Calculator_1 = __decorate([
    typedi_1.Service()
], Calculator);
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map