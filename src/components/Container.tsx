import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface ContainerProps {
  narrow?: boolean;
}

const StyledContainer = styled.div<ContainerProps>`
  ${({ theme: { space, media }, narrow }) => css`
    margin: 0 auto;
    padding: 0 ${space.medium};
    max-width: 1120px;

    // Narrow width

    ${narrow &&
    css`
      max-width: 736px;
    `}

    @media (min-width: ${media.medium}) {
      padding: 0 ${space.large};
    }

    @media (min-width: ${media.xLarge}) {
      padding: 0;
    }
  `};
`;

export const Container: FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
  narrow,
  ...rest
}) => (
  <StyledContainer narrow={narrow} {...rest}>
    {children}
  </StyledContainer>
);
