/** @format */

import { factorial } from "./factorial";

describe("Factorial", () => {
  expect(factorial(3)).toBe(6);
  expect(factorial(1)).toBe(1);
  expect(factorial(0)).toBe(1);
  expect(factorial(10)).toBe(3628800);
  it("Returns the factorial of 3", () => {
    expect(factorial(3)).toBe(6);
  });
  it("Returns the factorial of 1", () => {
    expect(factorial(5)).toBe(120);
  });
  it("Returns the factorial of 0", () => {
    expect(factorial(5)).toBe(120);
  });
  it("Returns the factorial of 10", () => {
    expect(factorial(5)).toBe(120);
  });
  it("Returns the factorial of 1", () => {
    expect(factorial(5)).toBe(120);
  });

  it("Should handle invalid input", () => {
    expect(factorial("a")).toBe(NaN);
    expect(factorial()).toBe(NaN);
    expect(factorial(undefined)).toBe(NaN);
    expect(factorial(null)).toBe(NaN);
  });
});
