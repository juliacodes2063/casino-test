import { Box } from "@mui/material";
import { useLocale } from "../../../features/locale/LocaleProvider";
import { getGeoTheme } from "../../../shared/config/geoTheme";
import type { ReactNode } from "react";

export function FooterSection({ children }: { children: ReactNode }) {
  const { geo } = useLocale();
  const footerBg = getGeoTheme(geo).ui.gradients.footerBg;

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: footerBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,

        height: {
          xs: 938,   
          md: 814, 
          lg: 416
        },

        py: { xs: 3, md: 2.5 },
      }}
    >
      {children}
    </Box>
  );
}
