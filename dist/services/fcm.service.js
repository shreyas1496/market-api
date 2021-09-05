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
const utils_1 = require("../utils");
var serviceAccount = require("/opt/account.json");
let FCMService = class FCMService {
    constructor() {
        this.send = (name, type, data) => {
            console.log(data);
            return firebase_admin_1.default
                .messaging()
                .sendMulticast({
                tokens: this.activeUsers.getActive(),
                fcmOptions: {
                    analyticsLabel: "anything",
                },
                notification: {
                    title: "hawa hawai",
                    body: "ab tak 56",
                },
                webpush: {
                    fcmOptions: {
                        link: "https://shreyas1496.tech",
                    },
                    notification: {
                        title: name,
                        body: type,
                        requireInteraction: true,
                    },
                    data: {
                        random: "value",
                    },
                },
            })
                .then((response) => {
                console.log(JSON.stringify(response));
            });
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