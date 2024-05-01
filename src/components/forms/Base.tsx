import styled, { css } from 'styled-components';
import { useBackgroundColor } from '../../hooks/useBackgroundColor';

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
  min?: number;
  max?: number;
  readonly?: boolean;
  compact?: boolean;
  onChange?: (...event: any[]) => void;
}

interface StyledInputProps {
  invalid?: boolean;
  valid?: boolean;
  active?: boolean;
  leftAligned?: boolean;
  centerAligned?: boolean;
  compact?: boolean;
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
    compact,
  }) =>
    css`
      border: solid 1px ${colors.grey};
      ${useBackgroundColor('white')}
      padding: ${space.xxxSmall} ${space.xxSmall};
      width: 100%;
      display: block;
      position: relative;
      transition: all 0.2s ease;

      &::placeholder {
        color: ${colors.neutral100};
      }

      /* &:focus,
      &:hover {
        box-shadow: 0 0 0 1px ${colors.grey};
      } */

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Works for Firefox */
      &[type='number'] {
        -moz-appearance: textfield;
      }

      ${compact &&
      css`
        max-width: 40px;
        text-align: center;
      `}

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
        box-shadow: 0 0 0 1px ${colors.grey};
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
