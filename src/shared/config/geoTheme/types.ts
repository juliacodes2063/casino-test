import type { Geo } from "../../../features/locale/localeConfig";

export type GeoUi = {
  colors: {
    primary: string;
  };
  gradients: {
    button: string;
    heroOverlay: string;
    footerBg: string;
  };
};

export type GeoTheme = {
  assets: {
    heroBg: string;
    slotImg: string;
    logo: string;
    footerLogo?: string;
    gamer: string;
  };
  ui: GeoUi;
};

export type { Geo };
