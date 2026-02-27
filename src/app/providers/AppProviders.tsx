import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { LocaleProvider, useLocale } from "../../features/locale/LocaleProvider";
import { createAppTheme } from "../theme/createAppTheme";
import type { ReactNode } from "react";

function ThemeWithGeo({ children }: { children: ReactNode }) {
  const { geo } = useLocale();
  const theme = useMemo(() => createAppTheme(geo), [geo]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <ThemeWithGeo>{children}</ThemeWithGeo>
    </LocaleProvider>
  );
}
