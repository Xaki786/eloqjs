/** @format */

import { isNumberValid } from "../utils/isNumberValid.js";

export const factorial = (number) => {
  if (!isNumberValid(number)) return NaN;
  let result = 1;
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};
