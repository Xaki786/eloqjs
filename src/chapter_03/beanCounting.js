/** @format */
import { generateCharCounter } from "../utils/generateCharCounter.js";
export const countBs = (str, character = "B") => {
  const bCounter = generateCharCounter(character);
  return bCounter(str);
};
