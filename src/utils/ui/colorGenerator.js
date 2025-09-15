// src/utils/ui/colorGenerator.js

import chroma from "chroma-js";

export const generateColor = (seed) => {
  const hash = seed.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  const hue = Math.abs(hash) % 360;
  return chroma.hsl(hue, 0.7, 0.9).hex();
};
