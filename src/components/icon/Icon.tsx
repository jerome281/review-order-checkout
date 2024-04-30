'use client'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import iconSizes, { ThemeIconSizesKeys } from '../../styles/tokens/iconSizes'
import { colors, ThemeColorsKeys } from '../../styles/tokens/colors'

export interface IconProps {
  children?: any
  size?: ThemeIconSizesKeys
  color?: ThemeColorsKeys
}

interface StyledIconProps {
  size: string
  color?: ThemeColorsKeys
}

const StyledIcon = styled.svg<StyledIconProps>`
  ${({ size, color }) => {
    const width = size.split(' ')[0]
    const height = size.split(' ')[1]
    return css`
      width: ${width}px;
      height: ${height}px;
      flex-shrink: 0;

      ${color &&
      css`
        color: ${colors[color]};
      `}
    `
  }};
`

export const Icon: FC<React.PropsWithChildren<IconProps>> = ({
  children,
  size = 'medium',
  color,
  ...rest
}) => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${iconSizes.medium}`}
    size={iconSizes[size]}
    color={color}
    {...rest}
  >
    {children}
  </StyledIcon>
)
