import React, { forwardRef, RefObject } from 'react';
import { BaseFormProps, StyledBase } from '../forms/Base';
import { FormField, FormFieldProps } from '../forms/FormField';

export interface InputProps extends BaseFormProps, FormFieldProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'search' | 'number';
  maxLength?: number;
}

// Styles

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      type = 'text',
      invalid,
      compact,
      min,
      max,
      valid,
      defaultValue,
      placeholder,
      required,
      errorMessage,
      hideLabel,
      disabled,
      hintText,
      extraInformation,
      hidden,
      value,
      onChange,
      maxLength,
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
      extraInformation={extraInformation}
      hidden={hidden}
      {...rest}
    >
      <StyledBase
        as="input"
        type={hidden ? 'hidden' : type}
        id={id}
        name={id}
        invalid={invalid}
        valid={valid}
        value={value}
        ref={ref as RefObject<HTMLInputElement>}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        aria-describedby={hintText && `${id}-hint`}
        onChange={onChange}
        compact={compact}
        maxLength={maxLength}
      />
    </FormField>
  )
);

Input.displayName = 'Input';
