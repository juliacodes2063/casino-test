import type { Geo } from "../../features/locale/localeConfig";
import { getGeoTheme } from "../../shared/config/geoTheme";
import { createTheme } from "@mui/material/styles";

const createGradientButtonVariant = (gradient: string) => ({
  props: { variant: "gradient" as const },
  style: {
    backgroundImage: gradient,
    padding: "20px 24px",
    fontWeight: 600,
    height: 56,
    fontSize: 16,
  },
});

export const createAppTheme = (geo: Geo) => {
  const { ui } = getGeoTheme(geo);

  return createTheme({
    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    palette: {
      mode: "dark",
      primary: { main: ui.colors.primary },
      text: {
        primary: "#FFFFFF", 
        secondary: " #BABABA",
        disabled: "#FBFBFBB3", 
      },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        variants: [createGradientButtonVariant(ui.gradients.button)],
        styleOverrides: {
          root: { 
            color: "var(--mui-palette-text-primary)",
            textTransform: "none" 
          },
        },
      },
    },
  });
};
