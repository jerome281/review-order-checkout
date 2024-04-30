import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Typography } from "./Typography";
import { ListItems } from "./ListItems";
import Stack from "./Stack";

export interface CardProps {
  heading: string;
  items?: ListItem[];
}

export interface ListItem {
  text: string;
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-align: left;
  overflow: hidden;
  height: 100%;
`;

const StyledBody = styled.div`
  ${({ theme: { space, colors } }) => css`
    background: ${colors.white};
    padding: ${space.medium};
    border-radius: 4px;
    height: 100%;
  `};
`;

const StyledHeader = styled.div`
  flex-grow: 1;
`;

export const Card: FC<React.PropsWithChildren<CardProps>> = ({
  heading,
  items,
  ...rest
}) => {
  return (
    <StyledCard {...rest}>
      <StyledBody>
        <Stack gap="xSmall">
          <StyledHeader>
            {heading && (
              <Typography component="h2" variant="headingMedium">
                {heading}
              </Typography>
            )}
          </StyledHeader>
          {items && <ListItems items={items} />}
        </Stack>
      </StyledBody>
    </StyledCard>
  );
};
