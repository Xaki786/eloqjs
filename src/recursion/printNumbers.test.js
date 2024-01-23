/** @format */

import { printNumbers } from "./printNumbers";

describe("Print Numbers Using Recursion", () => {
  it("Should return single numberer string if both arguements are equal", () => {
    expect(printNumbers(2, 2)).toBe("2");
  });
  it("Should return string starting from 1 to 10 with comma in between", () => {
    expect(printNumbers(1, 10)).toBe("1,2,3,4,5,6,7,8,9,10");
  });
  it("Should return string starting from -10 to 10 with comma in between", () => {
    expect(printNumbers(-10, 10)).toBe(
      "-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10"
    );
  });
  it("Should return string starting from 0 to 10 with comma in between", () => {
    expect(printNumbers(0, 10)).toBe("0,1,2,3,4,5,6,7,8,9,10");
  });
  it("Should return string starting from -10 to 0 with comma in between", () => {
    expect(printNumbers(-10, 0)).toBe("-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0");
  });
  it("Should return empty string if provided with invalid input", () => {
    expect(printNumbers("a", "b")).toBe("");
    expect(printNumbers()).toBe("");
    expect(printNumbers(null, null)).toBe("");
    expect(printNumbers(null, undefined)).toBe("");
    expect(printNumbers(undefined, undefined)).toBe("");
  });
});
