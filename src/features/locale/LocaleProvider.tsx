import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Locale, localeToGeo, Geo } from "./localeConfig";
import { initI18n } from "../i18n/i18n";
import type { ReactNode } from "react";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  geo: Geo;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("tr");

  const geo = useMemo(() => localeToGeo[locale], [locale]);

  const setLocaleAndI18n = useCallback((next: Locale) => {
    initI18n(next);
    setLocale(next);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale: setLocaleAndI18n, geo }),
    [locale, geo, setLocaleAndI18n]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
