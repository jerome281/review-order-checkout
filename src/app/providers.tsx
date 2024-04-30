"use client";

import GlobalStyles from "./../styles/GlobalStyles";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import DefaultTheme from "./../styles/tokens";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
