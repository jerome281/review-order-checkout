"use client";
import React from "react";
import styled, { css } from "styled-components";
import { Container } from "./Container";

const StyledFooter = styled.footer`
  ${({ theme: { space } }) => css`
    display: flex;
    margin-top: ${space.xxLarge};
  `};
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container></Container>
    </StyledFooter>
  );
};

export default Footer;
