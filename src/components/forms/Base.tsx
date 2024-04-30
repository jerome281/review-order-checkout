import styled, { css } from "styled-components";
import { useBackgroundColor } from "../../hooks/useBackgroundColor";

export interface BaseFormProps {
  id: string;
  invalid?: boolean;
  valid?: boolean;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string | number | readonly string[] | undefined;
  leftAligned?: boolean;
  centerAligned?: boolean;
  onChange?: (...event: any[]) => void;
}

interface StyledInputProps {
  invalid?: boolean;
  valid?: boolean;
  active?: boolean;
  leftAligned?: boolean;
  centerAligned?: boolean;
}

export const StyledBase = styled.input<StyledInputProps>`
  ${({
    theme: { colors, space },
    invalid,
    valid,
    active,
    as,
    leftAligned,
    centerAligned,
  }) =>
    css`
      border: solid 1px ${colors.brandOne120};
      ${useBackgroundColor("white")}
      padding: ${space.xSmall} ${space.small};
      width: 100%;
      display: block;
      position: relative;
      transition: all 0.2s ease;
      border-radius: 4px;

      &::placeholder {
        color: ${colors.neutral100};
      }

      &:focus,
      &:hover {
        box-shadow: 0 0 0 1px ${colors.brandOne120};
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Works for Firefox */
      &[type="number"] {
        -moz-appearance: textfield;
      }

      ${leftAligned &&
      css`
        text-align: left;
      `}

      ${centerAligned &&
      css`
        text-align: center;
      `}

      ${active &&
      css`
        box-shadow: 0 0 0 1px ${colors.brandOne120};
      `}

      // Invalid state

    ${invalid &&
      css`
        border-color: ${colors.systemError};
        box-shadow: 0 0 0 1px ${colors.systemError};

        &:hover {
          box-shadow: 0 0 0 1px ${colors.systemError};
        }
      `}


    // valid state

    ${valid &&
      css`
        border-color: ${colors.systemSuccess};
        box-shadow: 0 0 0 1px ${colors.systemSuccess};

        &:hover {
          box-shadow: 0 0 0 1px ${colors.systemSuccess};
        }
      `}
    `};
`;
