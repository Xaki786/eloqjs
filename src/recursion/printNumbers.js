/** @format */

import { isValidInput } from "../utils/areValuesNaN.js";

export const printNumbers = (firstNumber, secondNumber, counter = 1) => {
  if (!isValidInput(firstNumber, secondNumber)) {
    return "";
  }
  let smallest = Math.min(firstNumber, secondNumber);
  let largest = Math.max(firstNumber, secondNumber);
  let result = `${smallest}`;
  if (smallest === largest) {
    return result;
  }
  return (result += "," + printNumbers(smallest + counter, largest));
};