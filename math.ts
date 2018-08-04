// ---- math.ts ----
export function powerOf2(x = 0): number {
  return x * x;
}

export function sum(x, y): number {
  return x + y;
}

export function multiply(x, y): number {
  return x * y;
}

  // make division() ----------
  // the default export  |
  //      |              |
  export default function division(x, y): number {
    return x / y;
  }