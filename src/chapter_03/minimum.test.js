/** @format */

import { getMinimum } from "./minimum.js";

describe("getMinimum", () => {
  it("Finds the minimum of two numbers", () => {
    expect(getMinimum(1, 2)).toBe(1);
    expect(getMinimum(2, 1)).toBe(1);
  });

  it("Return NaN if either number is NaN", () => {
    expect(getMinimum(NaN, 1)).toBe(NaN);
    expect(getMinimum(1, NaN)).toBe(NaN);
  });

  it("return NaN for invalid input", () => {
    expect(getMinimum("a", 1)).toBe(NaN);
    expect(getMinimum(1, "a")).toBe(NaN);
  });

  it("Finds the minimum for the negative numbers", () => {
    expect(getMinimum(-1, -2)).toBe(-2);
    expect(getMinimum(-2, -1)).toBe(-2);
  });

  it("Return only first number if only first argument is provided", () => {
    expect(getMinimum(1)).toBe(1);
  });
});
