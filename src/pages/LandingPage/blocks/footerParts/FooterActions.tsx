import { Box, Typography } from "@mui/material";
import { LocaleSelect } from "../../../../features/locale/LocaleSelect";
import { SocialIconsRow } from "../../../../shared/ui/social/SocialIconsRow";

export function FooterActions({ label }: { label: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        gap: { xs: "60px", lg: "100px" },
        flexDirection: "column",
        justifyContent: "end",
        height: { xs: "none", lg: "100%"},
      }}
    >
      <LocaleSelect />
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "center", lg: "end"},
          flexDirection: "column",
          justifyContent: { xs: "center", lg: "end"},
          width: "100%"
        }}
      >
        <Typography sx={{ color: "text.disabled", mb: "12px" }}>
          {label}
        </Typography>
        <SocialIconsRow />
      </Box>
    </Box>
  );
}
