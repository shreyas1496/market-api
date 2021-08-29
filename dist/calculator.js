"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(kite) {
        var _this = this;
        this.TOKENS = {
            ADANIPORTS21SEPFUT: "12485634",
            ASIANPAINT21SEPFUT: "12492546",
            AXISBANK21SEPFUT: "12493314",
            BajajAUTO21SEPFUT: "12496130",
            BAJAJFINSV21SEPFUT: "12496386",
            BAJFINANCE21SEPFUT: "12798210",
            BANKNIFTY: "12476930",
            BHARTIARTL: "12503298",
            BPCL: "12507394",
            BRITANNIA: "12507650",
            CIPLA: "12508674",
            COALINDIA: "12508930",
            DIVISLAB: "12518914",
            DRREDDY: "12521730",
            EICHERMOT: "12525314",
            GRASIM: "12531202",
            HCLTECH: "12531970",
            HDFC: "12532226",
            HDFCBANK: "12532738",
            HDFCLIFE: "12532994",
            HEROMOTOCO: "12533250",
            HINDUNILVR: "12534530",
            HINDALCO: "12533506",
            ICICIBANK: "12535042",
            INDUSINDBK: "12537602",
            INFY: "12538114",
            IOC: "12538370",
            ITC: "12538882",
            JSWSTEEL: "12539906",
            KOTAKBANK: "12540418",
            LT: "12541442",
            M_AND_M: "12542466",
            MARUTI: "12543490",
            NESTLEIND: "12553218",
            NIFTY: "12477442",
            NTPC: "12553730",
            ONGC: "12553986",
            POWERGRID: "12556290",
            RELIANCE: "12557570",
            SBILIFE: "12558082",
            SBIN: "12558338",
            SHREECEM: "12558594",
            SUNPHARMA: "12559618",
            TATACONSUM: "12560386",
            TATAMOTORS: "12560642",
            TATASTEEL: "12561154",
            TCS: "12568834",
            TECHM: "12569090",
            TITAN: "12569346",
            ULTRACEMCO: "12570882",
            UPL: "12571138",
            WIPRO: "12572930",
        };
        this.getData = function () { return __awaiter(_this, void 0, void 0, function () {
            var table;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Object.entries(this.TOKENS).map(function (_a, index) {
                            var name = _a[0], token = _a[1];
                            return _this.kite.getDailyHistoricalData(token, index).then(function (res) { return ({
                                data: res,
                                name: name,
                            }); });
                        }))];
                    case 1:
                        table = _a.sent();
                        return [2 /*return*/, table.map(function (_a) {
                                var data = _a.data, name = _a.name;
                                return {
                                    name: name,
                                    ltp: data[0].close,
                                    ma44: _this.avg(44, data),
                                    ma20: _this.avg(20, data),
                                    ma10: _this.avg(10, data),
                                };
                            })];
                }
            });
        }); };
        this.kite = kite;
    }
    Calculator.prototype.avg = function (duration, data) {
        var ltp = data[0].close;
        var range = data.slice(0, duration).map(function (_a) {
            var close = _a.close;
            return close;
        });
        var sum = range.reduce(function (acc, value) { return acc + value; }, 0);
        var average = sum / duration;
        var diff = Math.abs(average - ltp);
        var closeness = (diff / ltp) * 100;
        return {
            average: average,
            diff: diff,
            closeness: closeness,
        };
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map