import { Box } from "@mui/material";
import type { ReactNode } from "react";

export function FooterLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "space-between",
        gap: 2,
        height: "100%",
        borderBottom: "1px solid #ffffff1A",
        py: "40px"
      }}
    >
      {children}
    </Box>
  );
}
