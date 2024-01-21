/** @format */

export const getMinimum = (num1, num2) => {
  if (num2 === undefined) return num1;
  if (num1 === undefined) return NaN;
  if (isNaN(num1) || isNaN(num2)) return NaN;
  if (num1 > num2) return num2;
  return num1;
};
