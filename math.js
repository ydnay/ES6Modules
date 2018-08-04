"use strict";
exports.__esModule = true;
// ---- math.ts ----
function powerOf2(x) {
    if (x === void 0) { x = 0; }
    return x * x;
}
exports.powerOf2 = powerOf2;
function sum(x, y) {
    return x + y;
}
exports.sum = sum;
function multiply(x, y) {
    return x * y;
}
exports.multiply = multiply;
// make division() ----------
// the default export  |
//      |              |
function division(x, y) {
    return x / y;
}
exports["default"] = division;
