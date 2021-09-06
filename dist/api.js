"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketApiRouter = void 0;
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const clients_1 = require("./clients");
const services_1 = require("./services");
const types_1 = require("./types");
const utils_1 = require("./utils");
exports.marketApiRouter = express_1.Router();
const kite = typedi_1.default.get(clients_1.KiteClient);
const activeUsers = typedi_1.default.get(utils_1.ActiveUsers);
const calculator = typedi_1.default.get(utils_1.Calculator);
const fcm = typedi_1.default.get(services_1.FCMService);
exports.marketApiRouter.get("/init", (_req, res) => {
    res.redirect(kite.getLoginUrl());
});
exports.marketApiRouter.get("/kite-callback", async (req, res, next) => {
    try {
        const requestToken = req.query.request_token;
        calculator.startServer(requestToken);
        res.send(`Welcome `);
    }
    catch (error) {
        next(error);
    }
});
exports.marketApiRouter.get("/data", async (_req, res) => {
    res.json(calculator.data());
});
exports.marketApiRouter.post("/data", async (req, res) => {
    activeUsers.add(req.body["fcm-token"]);
    res.json(calculator.data());
});
exports.marketApiRouter.get("/active-users", (_req, res) => {
    res.json(activeUsers.getActive());
});
exports.marketApiRouter.get("/test", (_req, res) => {
    fcm.send({
        type: types_1.MessageType.TEST,
        title: "Hello",
    });
    res.status(200).send();
});
exports.marketApiRouter.get("/info", (_req, res) => {
    res.json(calculator.rawData());
});
exports.marketApiRouter.use((err, _req, res) => {
    res.status(500);
    try {
        const message = JSON.stringify(err);
        console.trace(err);
        res.send(message);
    }
    catch (_a) {
        res.send("Unprocessable error");
    }
});
//# sourceMappingURL=api.js.map