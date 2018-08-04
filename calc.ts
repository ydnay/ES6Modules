// ---- calc.ts ----
import { powerOf2, sum } from './math';
import * as Ourmultiply from './math';
import mathDivision from './math';

const r1 = sum(42, 1); // r1 = 1764
const r2 = powerOf2(42);
const r3 = Ourmultiply.multiply(42, 2);

const r4 = mathDivision(42, 2);
// here root is not available anymore

console.log(`Result of sum(42, 1) is ${r1}`);
console.log(`Result of powerOf2(42) is ${r2}`);
console.log(`Result of muliply(42, 2) is ${r3}`)
console.log(`Result of divison(42, 2) is ${r4}`)