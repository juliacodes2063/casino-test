import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

type IconTextProps = {
  icon: ReactNode;
  text: string;
  gap?: number;
  sx?: object;
};

export function IconText({ icon, text, gap = 1.5, sx }: IconTextProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", lg: "row" },
        gap,
        whiteSpace: "wrap",
        color: "text.disabled",
        maxWidth: { xs: "none", md: 290},
        ...(sx ?? {}),
      }}
    >
      <Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
        {icon}
      </Box>
      <Typography sx={{ textAlign: { xs: "center", lg: "start"} }}>{text}</Typography>
    </Box>
  );
}
