import { css, useTheme } from 'styled-components';
import { ThemeTypographyKeys } from '../styles/tokens/typography';

/**
 * Returns a CSS style object based on the variant passed in.
 * @param {ThemeTypographyKeys} variant - The variant to generate the style for.
 * @returns {string} - The generated CSS style.
 */
export const useResponsiveType = (variant: ThemeTypographyKeys) => {
  const theme = useTheme();

  if (!variant) {
    return;
  }

  const styles = css`
    ${theme.typography[variant]?.fontFamily
      ? `font-family: ${theme.typography[variant]?.fontFamily};`
      : ''}
    ${theme.typography[variant]?.fontWeight
      ? `font-weight: ${theme.typography[variant]?.fontWeight};`
      : ''}
      ${theme.typography[variant]?.fontSize
      ? `font-size: ${theme.typography[variant]?.fontSize};`
      : ''}
      ${theme.typography[variant]?.lineHeight
      ? `line-height: ${theme.typography[variant]?.lineHeight};`
      : ''}
      ${theme.typography[variant]?.textTransform
      ? `text-transform: ${theme.typography[variant]?.textTransform};`
      : ''} 
      ${theme.typography[variant]?.letterSpacing
      ? `letter-spacing: ${theme.typography[variant]?.letterSpacing};`
      : ''}
  `;

  return styles;
};