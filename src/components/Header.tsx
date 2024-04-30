'use client';
import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from './Container';
import Logo from './svg/Logo';

const StyledHeader = styled.header`
  ${({ theme: { space, colors } }) => css`
    padding: ${space.small} 0;
    background-color: ${colors.black};
    backdrop-filter: blur(40px);
    width: 100%;
  `};
`;

const StyledHeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Logo />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
