/** @format */

export const countBs = (str, character = "B") => {
  const bCounter = generateCharCounter("B");
  return bCounter(str);
};

export const generateCharCounter = (character) => {
  return (str) => {
    if (!str) return 0;
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === character) {
        counter++;
      }
    }
    return counter;
  };
};
