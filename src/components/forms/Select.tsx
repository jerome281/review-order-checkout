import React, { forwardRef, RefObject } from "react";
import styled, { css } from "styled-components";
import { BaseFormProps, StyledBase } from "../forms/Base";
import { FormField, FormFieldProps } from "../forms/FormField";

export interface SelectProps extends BaseFormProps, FormFieldProps {
  options?: selectOption[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  as?: React.ElementType;
}

export interface selectOption {
  name: string;
  value: string | number;
}

const StyledSelect = styled(StyledBase)`
  ${({ theme: { colors, space } }) =>
    css`
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' class='Icon__StyledIcon-NDAcm ieTwjA'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h32v32H0z'%3E%3C/path%3E%3Cpath fill='currentColor' d='M8.25 11h16.09c1.112 0 1.669 1.344.88 2.132l-8.04 8.047a1.253 1.253 0 0 1-1.77 0l-8.04-8.047C6.58 12.344 7.137 11 8.25 11Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 16px center;
      background-size: 16px 16px;
      appearance: none;
      padding-right: ${space.xLarge};
    `}
`;

export const Select = forwardRef<
  HTMLSelectElement,
  React.PropsWithChildren<SelectProps>
>(
  (
    {
      children,
      options,
      label,
      id,
      invalid,
      defaultValue,
      placeholder,
      required,
      errorMessage,
      hideLabel,
      disabled,
      hintText,
      small,
      as,
      ...rest
    },
    ref
  ) => (
    <FormField
      fieldAs="div"
      label={label}
      htmlFor={id}
      invalid={invalid}
      errorMessage={errorMessage}
      hideLabel={hideLabel}
      hintText={hintText}
      disabled={disabled}
      small={small}
    >
      <StyledSelect
        id={id}
        as={as}
        name={id}
        invalid={invalid}
        ref={ref}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        aria-describedby={hintText && `${id}-hint`}
        {...rest}
      >
        {!children && (
          <>
            <option value="">{placeholder || "Please select"}</option>
            {options?.map((option, i) => (
              <option key={i} value={option.value}>
                {option.name}
              </option>
            ))}
          </>
        )}
        {children}
      </StyledSelect>
    </FormField>
  )
);

Select.displayName = "Select";
