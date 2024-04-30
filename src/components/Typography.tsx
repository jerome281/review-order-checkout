import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { useResponsiveType } from '../hooks/useResponsiveType';
import { ThemeTypographyKeys } from '../styles/tokens/typography';
import { ThemeColorsKeys } from '../styles/tokens/colors';

type TypographyComponents =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'span'
  | 'small'
  | 'strong'
  | 'legend'
  | 'label'
  | 'button'
  | 'dt'
  | 'dd'
  | 'li'
  | 'address'
  | 'figcaption'
  | 'div'
  | undefined;

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  component?: TypographyComponents;
  variant?: ThemeTypographyKeys;
  color?: ThemeColorsKeys;
  visuallyHidden?: boolean;
  text?: string;
  centered?: boolean;
  htmlFor?: string;
}

interface TypographyStylesProps {
  component?: TypographyComponents;
  variant: ThemeTypographyKeys;
  color?: ThemeColorsKeys;
  $visuallyHidden?: boolean;
  centered?: boolean;
}

const TypographyStyles = styled.p<TypographyStylesProps>`
  ${({ theme: { colors }, variant, color, centered, $visuallyHidden }) => css`
    color: ${color ? colors[color] : 'currentColor'};

    // Variants

    ${variant && useResponsiveType(variant)};

    // centered

    ${centered &&
    css`
      text-align: center;
    `}

    // Visually hidden

    ${$visuallyHidden &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    `}
  `};
`;

export const Typography: FC<React.PropsWithChildren<TypographyProps>> = ({
  children,
  component = 'p',
  variant = 'bodyMedium',
  color,
  visuallyHidden,
  text,
  centered,
  ...rest
}) => (
  <TypographyStyles
    as={component}
    variant={variant}
    color={color}
    $visuallyHidden={visuallyHidden}
    centered={centered}
    {...rest}
  >
    {text || children}
  </TypographyStyles>
);

export default Typography;
