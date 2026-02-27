import { Box } from "@mui/material";
import type { ReactNode } from "react";

type SocialIconButtonProps = {
  icon: ReactNode;
  size?: number;
  radius?: number;
};

export function SocialIconButton({
  icon,
  size = 50,
  radius = 8,
}: SocialIconButtonProps) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: `${radius}px`,
        border: `1px solid #ffffff66`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      
      }}
    >
      {icon}
    </Box>
  );
}
