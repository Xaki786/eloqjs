/** @format */

export const isNumberValid = (number) => {
  if (number === undefined || number === null) return false;
  if (Number.isNaN(number)) return false;
  return true;
};
