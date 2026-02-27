import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocale } from "../../../features/locale/LocaleProvider";
import { getGeoTheme } from "../../../shared/config/geoTheme";

export function Hero({ onOpenGame }: { onOpenGame: () => void }) {
  const { t } = useTranslation();
  const { geo } = useLocale();

  const { assets } = getGeoTheme(geo);

  return (
  
      <Box
        sx={{
          width: "100%",
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <Box
              component="img"
              src={assets.logo}
              alt="logo"
            />
            <Box
              component="img"
              src={assets.slotImg}
              alt="slot"
              sx={{
                height: 200
              }}
            />
            
          </Box>

          <Button
            variant="gradient"
            onClick={onOpenGame}
            sx={{ width: '100%' }}
          >
            {t("openGame")}
          </Button>
      </Box>

  );
}
