import { css, useTheme } from 'styled-components';
import { readableColor } from 'polished';
import { ThemeColorsKeys } from '../styles/tokens/colors';

export const useBackgroundColor = (color: ThemeColorsKeys) => {
  const theme = useTheme();

  if (!color || !theme.colors[color]) {
    return '';
  }

  return css`
    background-color: ${theme.colors[color]};
    color: ${readableColor(
      theme.colors[color],
      theme.colors.utilityText,
      theme.colors.utilityWhite,
      true
    )};
  `;
};