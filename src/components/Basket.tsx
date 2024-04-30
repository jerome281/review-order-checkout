import { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Typography from '@/components/Typography';

const StyledSearchHeading = styled(Typography)`
  ${({ theme: { space, colors } }) => css`
    padding: ${space.large} 0;
    margin: 0 auto;
    text-align: center;
    border-bottom: 1px solid ${colors.grey};
  `};
`;

const Basket: FC = () => {
  return (
    <div>
      <StyledSearchHeading component="h2" variant="headingMedium">
        Review Your Order & Complete Checkout
      </StyledSearchHeading>
    </div>
  );
};

export default Basket;
