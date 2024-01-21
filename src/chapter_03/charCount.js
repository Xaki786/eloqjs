/** @format */

import { generateCharCounter } from "../utils/generateCharCounter.js";

export const charCount = (str, character = "") => {
  const charCounter = generateCharCounter(character);
  return charCounter(str);
};
