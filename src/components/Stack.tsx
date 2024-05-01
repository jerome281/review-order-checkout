import React, { Ref, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { ThemeSpaceKeys } from '../styles/tokens/space';

export interface StackProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  gap?: ThemeSpaceKeys;
  as?: string | React.ElementType;
  asGrid?: boolean;
}

const StyledStack = styled.div<{ gap?: ThemeSpaceKeys; asGrid?: boolean }>`
  ${({ theme: { space }, gap, asGrid }) => css`
    ${asGrid
      ? css`
          grid-row-gap: ${space[gap || 'fluidMedium']};
        `
      : css`
          > * + * {
            margin-top: ${space[gap || 'fluidMedium']};
          }
        `}
  `};
`;
// Your existing Stack component
const StackComponent = (
  { children, gap, as, asGrid, ...rest }: StackProps,
  ref: Ref<HTMLDivElement>
) => {
  const StyledStackAs = as
    ? styled(as as React.ComponentType<any>)`
        /* Add any additional styling here if needed */
      `
    : StyledStack;
  return (
    <StyledStackAs ref={ref} gap={gap} asGrid={asGrid} {...rest}>
      {children}
    </StyledStackAs>
  );
};

// Wrap the existing Stack component with forwardRef
const Stack = forwardRef<HTMLDivElement, StackProps>(StackComponent);

export { Stack, StyledStack };
Stack.displayName = 'Stack';
export default Stack;
