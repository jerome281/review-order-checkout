import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Stack } from "../Stack";
import { Typography } from "../Typography";

export interface FormFieldProps {
  label: string;
  fieldAs?: "div" | "fieldset";
  hideLabel?: boolean;
  htmlFor?: string;
  invalid?: boolean;
  errorMessage?: string;
  hintText?: string;
  disabled?: boolean;
  hidden?: boolean;
  extraInformation?: string | React.ReactNode;
  small?: boolean;
  value?: string;
  isOpen?: boolean;
}

type StyledFormFieldProps = Pick<FormFieldProps, "disabled">;
type StyledFormFieldHeaderProps = Pick<FormFieldProps, "hideLabel">;

const StyledFormField = styled.div<StyledFormFieldProps>`
  ${({ disabled, hidden }) => css`
    // Disabled

    ${disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

    // Hidden
    ${hidden &&
    css`
      display: none;
    `}
  `};
`;

const StyledFormFieldHeader = styled.div<StyledFormFieldHeaderProps>`
  ${({ theme: { space }, hideLabel }) => css`
    ${!hideLabel &&
    css`
      margin-bottom: ${space.xxSmall};
    `}
  `};
`;

export const FormField: FC<React.PropsWithChildren<FormFieldProps>> = ({
  label,
  fieldAs = "div",
  hideLabel,
  htmlFor,
  children,
  invalid,
  errorMessage,
  disabled,
  hintText,
  extraInformation,
  hidden,
  small,
  value,
  ...rest
}) => {
  return (
    <StyledFormField as={fieldAs} disabled={disabled} hidden={hidden} {...rest}>
      <StyledFormFieldHeader hideLabel={hideLabel}>
        <Stack gap="xxSmall">
          <Typography
            variant={small ? "bodySmallBold" : "bodyMediumBold"}
            htmlFor={htmlFor}
            component={fieldAs === "fieldset" ? "legend" : "label"}
            visuallyHidden={hideLabel}
          >
            {label}
          </Typography>
          {hintText && (
            <Typography
              id={`${htmlFor || "field"}-hint`}
              variant={small ? "bodySmall" : "bodyMedium"}
            >
              {hintText}
            </Typography>
          )}
        </Stack>
      </StyledFormFieldHeader>
      {children}
      {invalid && errorMessage && errorMessage}
    </StyledFormField>
  );
};
