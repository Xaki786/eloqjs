/** @format */

export const areValuesNaN = (base, exponent) => {
  if (base === undefined || exponent === undefined) return true;
  if (base === null || exponent === null) return true;
  if (base === 0 && exponent === 0) return true;
  if (Number.isNaN(Number(base)) || Number.isNaN(Number(exponent))) return true;
  if (exponent < 0) return true;
  return false;
};
export const isValidInput = (firstNumber, secondNumber) => {
  if (firstNumber === undefined || secondNumber === undefined) return false;
  if (firstNumber === null || secondNumber === null) return false;
  if (Number.isNaN(Number(firstNumber)) || Number.isNaN(Number(secondNumber)))
    return false;
  return true;
};
