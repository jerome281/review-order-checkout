import React, { FC } from "react";
import styled, { css } from "styled-components";
import { ThemeSpaceKeys } from "../styles/tokens/space";

// Interface

type Columns = "1" | "2" | "3" | "4" | "none";

export interface GridProps {
  desktopColumns?: Columns | number;
  tabletColumns?: Columns | number;
  mobileColumns?: Columns;
  as?: any;
  mobileGap?: ThemeSpaceKeys;
  tabletGap?: ThemeSpaceKeys;
  desktopGap?: ThemeSpaceKeys;
}

// Styles

interface StyledGridProps {
  desktopColumns?: Columns;
  tabletColumns?: Columns;
  mobileColumns?: Columns;
  mobileGap?: ThemeSpaceKeys;
  tabletGap?: ThemeSpaceKeys;
  desktopGap?: ThemeSpaceKeys;
}

const StyledGrid = styled.div<StyledGridProps>`
  ${({
    theme: { space, media },
    mobileColumns,
    desktopColumns,
    tabletColumns,
    mobileGap,
    tabletGap,
    desktopGap,
  }) => css`
    display: grid;
    gap: ${space[mobileGap || "xSmall"]};

    // Mobile > styles
    ${mobileColumns !== "none" &&
    css`
      grid-template-columns: ${`repeat(${mobileColumns}, 1fr)`};
    `}

    // Tablet > styles
    ${tabletColumns !== "none" &&
    css`
      @media (min-width: ${media.medium}) {
        grid-template-columns: ${`repeat(${tabletColumns}, 1fr)`};
        gap: ${space[tabletGap || "medium"]};
      }
    `}

    // Desktop > styles
    ${desktopColumns !== "none" &&
    css`
      @media (min-width: ${media.xLarge}) {
        grid-template-columns: ${`repeat(${desktopColumns}, 1fr)`};
        gap: ${space[desktopGap || "medium"]};
      }
    `}
  `};
`;

// JSX

export const Grid: FC<React.PropsWithChildren<GridProps>> = ({
  children,
  desktopColumns = "3",
  tabletColumns = "none",
  mobileColumns = "none",
  mobileGap,
  tabletGap,
  desktopGap,
  as,
  ...rest
}) => (
  <StyledGrid
    mobileColumns={mobileColumns}
    desktopColumns={desktopColumns}
    tabletColumns={tabletColumns}
    mobileGap={mobileGap}
    tabletGap={tabletGap}
    desktopGap={desktopGap}
    as={as}
    {...rest}
  >
    {children}
  </StyledGrid>
);

export default Grid;
