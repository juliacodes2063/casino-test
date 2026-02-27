import type { Geo, GeoTheme } from "./types";
import { assetsByGeo } from "./assets";
import { uiByGeo } from "./ui";

export type { GeoTheme, Geo };

export const GEO_THEME: Record<Geo, GeoTheme> = {
  default: {
    assets: assetsByGeo.default,
    ui: uiByGeo.default,
  },
  tr: {
    assets: assetsByGeo.tr,
    ui: uiByGeo.tr,
  },
};

export const getGeoTheme = (geo: Geo) => GEO_THEME[geo];
