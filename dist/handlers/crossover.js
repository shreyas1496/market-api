"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crossoverHandler = void 0;
const constants_1 = require("../constants");
const crossoverHandler = (eventEmitter) => {
    eventEmitter.on(constants_1.LTP_CROSSOVER_EVENT, ({ name, type, value }) => {
        console.log(constants_1.LTP_CROSSOVER_EVENT, name, type, value);
    });
};
exports.crossoverHandler = crossoverHandler;
//# sourceMappingURL=crossover.js.map