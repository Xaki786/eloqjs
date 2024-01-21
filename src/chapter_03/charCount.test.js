/** @format */

import { charCount } from "./charCount.js";

describe("Count Characters", () => {
  it("Count Number of character provided in a provided string", () => {
    expect(charCount("BBC", "B")).toBe(2);
    expect(charCount("BCb", "B")).toBe(1);
    expect(charCount("bbbb", "b")).toBe(4);
    expect(charCount("BBC", "C")).toBe(1);
    expect(charCount("BCb", "b")).toBe(1);
    expect(charCount("bbbb", "B")).toBe(0);
  });

  it("Should return 0 if number is provided for the string", () => {
    expect(charCount(1, "B")).toBe(0);
  });

  it("Should return 0 if undefined or null is provided", () => {
    expect(charCount(undefined, "B")).toBe(0);
    expect(charCount(null, "B")).toBe(0);
    expect(charCount("asdfsdf")).toBe(0);
    expect(charCount("B", null)).toBe(0);
  });
  it("Should return 0 if empty object or object is provided", () => {
    expect(charCount({}, "B")).toBe(0);
    expect(charCount([], "B")).toBe(0);
    expect(charCount({}, "")).toBe(0);
    expect(charCount([], "")).toBe(0);
  });
  it("Should return 0 if empty string is provided", () => {
    expect(charCount("", "B")).toBe(0);
  });

  it("Should return 0 if no arguement is provided", () => {
    expect(charCount()).toBe(0);
  });
});
