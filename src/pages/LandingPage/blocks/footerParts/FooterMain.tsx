import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from "../../../../shared/assets/icons/download.svg";
import { GradientDashedBorder } from "../../../../shared/ui/GradientDashedBorder";
import type { GeoTheme } from "../../../../shared/config/geoTheme";
import { FooterBadges } from "./FooterBadges";
import { useTranslation } from "react-i18next";

type FooterMainProps = {
  assets: GeoTheme["assets"];
  ui: GeoTheme["ui"];
  title: string;
  subtitle: string;
  cta: string;
};

export function FooterMain({
  assets,
  ui,
  title,
  subtitle,
  cta,
}: FooterMainProps) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Box
        component="img"
        src={assets.gamer}
        alt="gamer"
        sx={{ display: { xs: "none", lg: "block" } }}
      />
      <GradientDashedBorder
        gradient={ui.gradients.button}
        radius={3}
        padding={24}
        dash="6 6"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 294,
          width: 390,
        }}
      >
        <Box
          component="img"
          src={assets.logo}
          alt="logo"
          sx={{ width: 175, height: 80, mb: "16px" }}
        />
        <Typography sx={{ fontWeight: 860, fontSize: 32 }}>{title}</Typography>
        <Typography sx={{ color: "text.secondary", mt: "6px", mb: "18px" }}>
          {subtitle}
        </Typography>
        <Button
          variant="gradient"
          sx={{ width: 250 }}
          startIcon={<DownloadIcon width={40} height={40} />}
        >
          {cta}
        </Button>
      </GradientDashedBorder>
      <FooterBadges 
        only18={t("only18")} 
        certified={t("certified")}
        sx={{ display: { xs: "none", lg: "flex" } }}
      />
    </Box>
  );
}
