export type Locale = "tr" | "en" | "uk" | "ru";
export const LOCALES: Locale[] = ["tr", "en", "uk", "ru"];

export const LOCALE_LABEL: Record<Locale, string> = {
  tr: "Turkish",
  en: "English",
  uk: "Українська",
  ru: "Русский",
};

export const LOCALE_FLAG: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  uk: "🇺🇦",
  ru: "🇷🇺",
};

export type Geo = "tr" | "default";

export const localeToGeo: Record<Locale, Geo> = {
  tr: "tr",
  en: "default",
  uk: "default",
  ru: "default",
};
