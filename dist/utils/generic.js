"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponseForUI = exports.errorHandler = void 0;
const errorHandler = (type) => (error) => {
    console.error(type);
    console.error(error);
};
exports.errorHandler = errorHandler;
const formatResponseForUI = (input) => {
    return Object.values(input).map(({ name, ltp, movingAverageValues, closeHistory }) => {
        return {
            name,
            ltp,
            prevClose: closeHistory[0],
            movingAverageValues: movingAverageValues.map(({ duration, leads, history }) => ({
                duration,
                leads,
                value: Number(history[0]).toFixed(2),
            })),
        };
    });
};
exports.formatResponseForUI = formatResponseForUI;
//# sourceMappingURL=generic.js.map