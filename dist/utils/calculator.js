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
var Calculator_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const typedi_1 = require("typedi");
const clients_1 = require("../clients");
const constants_1 = require("../constants");
const types_1 = require("../types");
const _1 = require(".");
let Calculator = Calculator_1 = class Calculator {
    constructor() {
        this.data = () => _1.formatResponseForUI(Calculator_1.instrumentTableRowMap);
        this.startServer = async (requestToken) => {
            return this.kite
                .startKiteServer(requestToken, this.seedData, this.onTicks)
                .catch(console.log);
        };
        this.seedData = async () => {
            const raw = await Promise.all(Object.entries(constants_1.SCRIPTS).map(([name, instrumentToken], index) => {
                return this.kite
                    .getDailyHistoricalData(instrumentToken, index)
                    .then((res) => ({
                    data: res,
                    name,
                    instrumentToken,
                }));
            }));
            raw.forEach(({ data, name, instrumentToken }) => {
                const closeHistory = data.map((hist) => hist.close);
                Calculator_1.instrumentTableRowMap[instrumentToken] = this.getTableRow(instrumentToken, name, closeHistory);
            });
            console.log("seeding complete");
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
                return {
                    duration,
                    history,
                    leads,
                };
            });
            return {
                instrumentToken,
                name,
                ltp,
                closeHistory,
                movingAverageValues,
            };
        };
        this.onTicks = (ticks) => {
            ticks.forEach(({ instrumentToken, lastPrice }) => {
                const entry = Calculator_1.instrumentTableRowMap[instrumentToken];
                if (entry) {
                    entry.ltp = lastPrice;
                }
            });
        };
    }
};
Calculator.instrumentTableRowMap = {};
__decorate([
    typedi_1.Inject(() => clients_1.KiteClient),
    __metadata("design:type", clients_1.KiteClient)
], Calculator.prototype, "kite", void 0);
Calculator = Calculator_1 = __decorate([
    typedi_1.Service()
], Calculator);
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map