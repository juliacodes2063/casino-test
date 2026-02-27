import type { GeoTheme } from "./types";
import type { Geo } from "./types";

export const assetsByGeo: Record<Geo, GeoTheme["assets"]> = {
  default: {
    heroBg: require("../../../shared/assets/geo/default/hero_bg.png"),
    logo: require("../../../shared/assets/geo/default/logo.png"),
    slotImg: require("../../../shared/assets/geo/default/slot.png"),
    gamer: require("../../../shared/assets/geo/default/gamer.png"),
  },
  tr: {
    heroBg: require("../../../shared/assets/geo/tr/hero_bg.png"),
    logo: require("../../../shared/assets/geo/tr/logo.png"),
    slotImg: require("../../../shared/assets/geo/tr/slot.png"),
    gamer: require("../../../shared/assets/geo/default/gamer.png"),
  },
};
