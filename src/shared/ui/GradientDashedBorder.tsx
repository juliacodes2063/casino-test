import { Box } from "@mui/material";
import { useId } from "react";
import type { ReactNode } from "react";
import type { BoxProps } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

type GradientDashedBorderProps = Omit<BoxProps, "sx"> & {
  gradient: string;
  radius?: number;
  dash?: string;
  padding?: number;
  children: ReactNode;
  sx?: SxProps<Theme>;
};

const getGradientStops = (gradient: string) => {
  const matches = gradient.match(/#(?:[0-9a-fA-F]{3}){1,2}/g);
  if (!matches || matches.length === 0) return ["#ffffff", "#ffffff"];
  if (matches.length === 1) return [matches[0], matches[0]];
  return [matches[0], matches[matches.length - 1]];
};

export function GradientDashedBorder({
  gradient,
  radius = 3,
  dash = "6 6",
  padding = 24,
  children,
  sx,
  className,
  ...rest
}: GradientDashedBorderProps) {
  const gradientId = useId();
  const [gradStart, gradEnd] = getGradientStops(gradient);

  const baseSx: SxProps<Theme> = {
    position: "relative",
    borderRadius: `${radius}px`,
    padding: `${padding}px`,
    boxSizing: "border-box",
  };

  const mergedSx: SxProps<Theme> = sx
    ? Array.isArray(sx)
      ? [baseSx, ...sx]
      : [baseSx, sx]
    : baseSx;

  return (
    <Box className={className} sx={mergedSx} {...rest}>
      <Box
        component="svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradStart} />
            <stop offset="100%" stopColor={gradEnd} />
          </linearGradient>
        </defs>
        <rect
          x="0.5"
          y="0.5"
          width="99"
          height="99"
          rx={radius}
          ry={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="1"
          strokeDasharray={dash}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </Box>
      {children}
    </Box>
  );
}
