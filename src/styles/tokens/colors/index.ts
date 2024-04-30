import { brandColors } from "./brand";
import { utilityColors } from "./utility";

// Main colours
export const colors = {
  transparent: "transparent",
  ...brandColors,
  ...utilityColors,
} as const;

export default colors;

export type ThemeColors = typeof colors;
export type ThemeColorsKeys = keyof typeof colors;
