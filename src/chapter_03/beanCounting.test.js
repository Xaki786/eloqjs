/** @format */

import { countBs } from "./beanCounting.js";

describe("Count Characters", () => {
  it("Count Number of B in a provided string", () => {
    expect(countBs("BBC")).toBe(2);
    expect(countBs("BCb")).toBe(1);
    expect(countBs("bbbb")).toBe(0);
  });

  it("Should return 0 if number is provided", () => {
    expect(countBs(1)).toBe(0);
  });

  it("Should return 0 if undefined or null is provided", () => {
    expect(countBs(undefined)).toBe(0);
    expect(countBs(null)).toBe(0);
  });
  it("Should return 0 if empty object or object is provided", () => {
    expect(countBs({})).toBe(0);
    expect(countBs([])).toBe(0);
  });
  it("Should return 0 if empty string is provided", () => {
    expect(countBs("")).toBe(0);
  });

  it("Should return 0 if no arguement is provided", () => {
    expect(countBs("")).toBe(0);
  });
});
