/** @format */

import { generateCharCounter } from "./beanCounting";

export const charCount = (str, character = "") => {
  const charCounter = generateCharCounter(character);
  return charCounter(str);
};
