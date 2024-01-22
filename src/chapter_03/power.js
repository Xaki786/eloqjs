/** @format */

import { areValuesNaN } from "../utils/areValuesNaN";

export const powerWithLoop = (base, exponent) => {
  if (areValuesNaN(base, exponent)) return NaN;
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

export const powerWithRecursive = (base, exponent) => {
  if (areValuesNaN(base, exponent)) return NaN;
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};

export const power = powerWithRecursive;
