/** @format */

export const areValuesNaN = (base, exponent) => {
  if (base === undefined || exponent === undefined) return true;
  if (base === null || exponent === null) return true;
  if (base === 0 && exponent === 0) return true;
  if (Number.isNaN(Number(base)) || Number.isNaN(Number(exponent))) return true;
  if (exponent < 0) return true;
  return false;
};
