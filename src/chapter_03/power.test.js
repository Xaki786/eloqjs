/** @format */

import { power } from "./power";

describe("Power", () => {
  it("should return 1 when exponent is 0", () => {
    expect(power(2, 0)).toBe(1);
  });

  it("should return 2 when exponent is 1", () => {
    expect(power(2, 1)).toBe(2);
  });

  it("should return 4 when exponent is 2", () => {
    expect(power(2, 2)).toBe(4);
  });

  it("should return 8 when exponent is 3", () => {
    expect(power(2, 3)).toBe(8);
  });

  it("should return NaN when exponent is negative", () => {
    expect(power(2, -1)).toBe(NaN);
  });

  it("Should return NaN when exponent is not a number", () => {
    expect(power(2, "a")).toBe(NaN);
  });

  it("Should return NaN when base is not a number", () => {
    expect(power("a", 2)).toBe(NaN);
  });

  it("Should return NaN when base and exponent are not numbers", () => {
    expect(power("a", "b")).toBe(NaN);
  });

  it("Should return NaN when base is undefined or null", () => {
    expect(power(undefined, 2)).toBe(NaN);
    expect(power(null, 2)).toBe(NaN);
  });

  it("Should return NaN when exponent is undefined or null", () => {
    expect(power(2, undefined)).toBe(NaN);
    expect(power(2, null)).toBe(NaN);
  });

  it("Should return NaN when base and exponent are undefined or null", () => {
    expect(power(undefined, undefined)).toBe(NaN);
    expect(power(null, null)).toBe(NaN);
  });

  it("Should return NaN when base and exponent are 0", () => {
    expect(power(0, 0)).toBe(NaN);
  });
});
