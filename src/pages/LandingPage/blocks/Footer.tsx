import { useTranslation } from "react-i18next";
import { useLocale } from "../../../features/locale/LocaleProvider";
import { getGeoTheme } from "../../../shared/config/geoTheme";
import {
  FooterLayout,
  FooterMain,
  FooterActions,
  FooterBadges,
} from "./footerParts";

export function Footer() {
  const { t } = useTranslation();

  const { geo } = useLocale();

  const { assets, ui } = getGeoTheme(geo);

  return (
    <FooterLayout>
      <FooterMain
        assets={assets}
        ui={ui}
        title={t("downloadCasino")}
        subtitle={t("playMin")}
        cta={t("installApp")}
      />

      <FooterActions label={t("usOnSocial")} />
      <FooterBadges
        only18={t("only18")}
        certified={t("certified")}
        sx={{ display: { xs: "flex", lg: "none" } }}
      />
    </FooterLayout>
  );
}
