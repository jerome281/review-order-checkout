import { colors } from './colors'

const borders = {
  default: `solid 2px ${colors.black}`,
  valid: `solid 2px ${colors.black}`,
  focus: `solid 2px ${colors.black}`,
  disabled: `solid 2px ${colors.black}`,
  error: `solid 2px ${colors.black}`
} as const

export default borders

export type ThemeBorders = typeof borders
export type ThemeBordersKeys = keyof typeof borders
