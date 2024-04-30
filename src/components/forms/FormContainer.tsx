import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Container } from "../Container";
import { Stack } from "../Stack";

// Interface

export interface FormContainerProps {}

// Styles

const StyledFormContainer = styled.div`
  ${({ theme: { space, colors } }) => css`
    padding: ${space.fluidXLarge} 0;
    counter-reset: step-counter;
    color: ${colors.white};
  `};
`;

// JSX

export const FormContainer: FC<React.PropsWithChildren<FormContainerProps>> = ({
  children,
}) => (
  <StyledFormContainer>
    <Container>
      <Stack gap="fluidSmall">{children}</Stack>
    </Container>
  </StyledFormContainer>
);

export default FormContainer;
