import type { Geo, GeoUi } from "./types";

export const uiByGeo: Record<Geo, GeoUi> = {
  default: {
    colors: {
      primary: "#6C5CE7",
    
    },
    gradients: {
      button: "linear-gradient(90deg, #8A5CFF 0%, #FF4FD8 100%)",
      heroOverlay:
        "linear-gradient(360deg, #6a0707 20.07%, rgba(0, 0, 0, 0) 100%)",
      footerBg: "linear-gradient(270deg, #06225D 0%, #02011F 37.03%)",
    },
  },
  tr: {
    colors: {
      primary: "#FF3B3B",
    },
    
    gradients: {
      button: "linear-gradient(84.38deg, #FF8D6B 7.59%, #FFBA47 96.71%)",
      heroOverlay:
        "linear-gradient(360deg, #000000 20.07%, rgba(0, 0, 0, 0) 100%)",
      footerBg: "linear-gradient(270deg, #06225D 0%, #02011F 37.03%)",
    },
  },
};
