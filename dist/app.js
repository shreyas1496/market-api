"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv").config();
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const api_1 = require("./api");
exports.app = express_1.default();
exports.app.use(cors_1.default());
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use("/market-api", api_1.marketApiRouter);
const port = parseInt(process.env.PORT || "8080");
exports.app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map