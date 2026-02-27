import { Box, SxProps } from "@mui/material";
import AgeIcon from "../../../../shared/assets/icons/age.svg";
import LicenseIcon from "../../../../shared/assets/icons/license.svg";
import { IconText } from "../../../../shared/ui/IconText";
import type { Theme } from "@mui/material/styles";

type FooterBadgesProps = {
  only18: string;
  certified: string;
  sx?: SxProps<Theme>; 
};

export function FooterBadges({ only18, certified, sx }: FooterBadgesProps) {
  const baseSx: SxProps<Theme> = {
    flexDirection: { xs: "column", md: "row", lg: "column" },
    justifyContent: { xs: "space-between" },
    gap: 3,
  };

  const mergedSx: SxProps<Theme> = sx
    ? Array.isArray(sx)
      ? [baseSx, ...sx]
      : [baseSx, sx]
    : baseSx;

  return (
    <Box sx={mergedSx}>
      <IconText icon={<AgeIcon width={58} height={58} />} text={only18} />
      <IconText
        icon={<LicenseIcon width={50} height={58} />}
        text={certified}
      />
    </Box>
  );
}
