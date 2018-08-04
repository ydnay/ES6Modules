"use strict";
exports.__esModule = true;
// ---- calc.ts ----
var math_1 = require("./math");
var Ourmultiply = require("./math");
var math_2 = require("./math");
var r1 = math_1.sum(42, 1); // r1 = 1764
var r2 = math_1.powerOf2(42);
var r3 = Ourmultiply.multiply(42, 2);
var r4 = math_2["default"](42, 2);
// const r1 = mathSum(42, 1);
// here root is not available anymore
console.log("Result of sum(42, 1) is " + r1);
console.log("Result of powerOf2(42) is " + r2);
console.log("Result of muliply(42, 2) is " + r3);
console.log("Result of divison(42, 2) is " + r4);
