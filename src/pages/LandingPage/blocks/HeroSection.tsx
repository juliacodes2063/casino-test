import { Box } from "@mui/material";
import { useLocale } from "../../../features/locale/LocaleProvider";
import { getGeoTheme } from "../../../shared/config/geoTheme";
import type { ReactNode } from "react";

export function HeroSection({ children }: { children: ReactNode }) {
  const { geo } = useLocale();
  const { assets, ui } = getGeoTheme(geo);
  const bg = assets.heroBg;
  const overlay = ui.gradients.heroOverlay;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        flex: 1,
        minHeight: {
          xs: 854,
          md: 720,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        },

        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: { xs: 220, md: 320 },
          background: overlay,
          zIndex: 1,
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2, height: "100%", width: {xs: "100%", sm: 360} }}>
        {children}
      </Box>
    </Box>
  );
}
