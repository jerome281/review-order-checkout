import { colors } from './colors';

const borders = {
  default: `solid 1px ${colors.grey}`,
  valid: `solid 1px ${colors.grey}`,
  focus: `solid 1px ${colors.grey}`,
  disabled: `solid 1px ${colors.grey}`,
  error: `solid 1px ${colors.grey}`,
} as const;

export default borders;

export type ThemeBorders = typeof borders;
export type ThemeBordersKeys = keyof typeof borders;
