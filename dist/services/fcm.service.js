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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FCMService = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const typedi_1 = require("typedi");
const types_1 = require("../types");
const utils_1 = require("../utils");
var serviceAccount = require("/opt/account.json");
let FCMService = class FCMService {
    constructor() {
        this.send = (options) => {
            const notification = this.buildNotification(options);
            const tokens = this.activeUsers.getActive();
            if (notification && tokens.length > 0) {
                return firebase_admin_1.default
                    .messaging()
                    .sendMulticast({
                    tokens,
                    fcmOptions: {
                        analyticsLabel: "anything",
                    },
                    webpush: {
                        fcmOptions: {
                            link: "https://shreyas1496.tech",
                        },
                        notification,
                        data: {
                            random: "value",
                        },
                    },
                })
                    .then((response) => {
                    response.responses.forEach((res, index) => {
                        var _a;
                        if (res.success === false &&
                            ((_a = res.error) === null || _a === void 0 ? void 0 : _a.message) ===
                                "messaging/registration-token-not-registered") {
                            this.activeUsers.removeToken(tokens[index]);
                        }
                    });
                    console.log(response.successCount, response.failureCount);
                })
                    .catch(utils_1.errorHandler("Firebase"));
            }
            return Promise.resolve();
        };
        this.buildNotification = (options) => {
            const { type, body, ma, title } = options;
            if (type === types_1.MessageType.MA_CLOSENESS && ma) {
                const { data, duration, isInBucket } = ma;
                return {
                    title: `${data.name} @ ${data.ltp}`,
                    body: isInBucket
                        ? `Trading close to ${duration} DMA line`
                        : `Moving away from ${duration} DMA line`,
                    requireInteraction: true,
                };
            }
            else if (!!title) {
                return {
                    title,
                    body: body !== null && body !== void 0 ? body : type,
                    requireInteraction: true,
                };
            }
            else {
                return null;
            }
        };
        firebase_admin_1.default.initializeApp({
            credential: firebase_admin_1.default.credential.cert(serviceAccount),
        });
    }
};
__decorate([
    typedi_1.Inject(() => utils_1.ActiveUsers),
    __metadata("design:type", utils_1.ActiveUsers)
], FCMService.prototype, "activeUsers", void 0);
FCMService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], FCMService);
exports.FCMService = FCMService;
//# sourceMappingURL=fcm.service.js.map