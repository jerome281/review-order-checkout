import math from "polished/lib/math/math";
import media, { ThemeMediaKeys } from "./media";

const maxMedia = Object.entries(media).reduce((accumulator, [key, value]) => {
  const newValue: Record<string, ThemeMediaKeys> = { ...accumulator };
  newValue[key] = math(`${value} - 1`) as ThemeMediaKeys;
  return newValue;
}, {});

export default maxMedia;
