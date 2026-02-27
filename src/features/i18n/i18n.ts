import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources, AppLang } from "./resources";

export const initI18n = (lng: AppLang) => {
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
      resources,
      lng,
      fallbackLng: "en",
      interpolation: { escapeValue: false },
    });
  } else {
    i18n.changeLanguage(lng);
  }
};