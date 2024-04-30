import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface ListItemsProps {
  items: ListItem[];
}

export interface ListItem {
  text: string;
}

export const StyledListItems = styled.ul`
  ${({ theme: { space } }) => css`
    li {
      display: flex;
      gap: ${space.xxSmall};

      & + li {
        margin-top: ${space.xxSmall};
      }

      svg {
        flex-shrink: 0;
      }
    }
  `};
`;

export const ListItems: FC<ListItemsProps> = ({ items, ...rest }) => {
  if (items.length < 1) {
    return null;
  }

  return (
    <StyledListItems {...rest}>
      {items.map((item, index) => (
        <li key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.text }} />
        </li>
      ))}
    </StyledListItems>
  );
};
