export const resources = {
  en: {
    translation: {
      openGame: "OPEN THE GAME",
      downloadCasino: "Download Casino",
      playMin: "Play Min anywhere, anytime",
      installApp: "Install App",
      only18: "Only 18+",
      certified: "Casino is certified by the Anjouan Gaming Authority",
      usOnSocial: "Us on social media:",
    },
  },

  tr: {
    translation: {
      openGame: "OYUNU AÇ",
      downloadCasino: "Casino'yu indir",
      playMin: "Her yerde, her zaman oyna",
      installApp: "Uygulamayı kur",
      only18: "Sadece 18+",
      certified: "Casino, Anjouan Oyun Otoritesi tarafından sertifikalıdır",
      usOnSocial: "Sosyal medya:",
    },
  },

  uk: {
    translation: {
      openGame: "ВІДКРИТИ ГРУ",
      downloadCasino: "Завантажити казино",
      playMin: "Грай будь-де, будь-коли",
      installApp: "Встановити застосунок",
      only18: "Лише 18+",
      certified: "Казино сертифіковане Anjouan Gaming Authority",
      usOnSocial: "Ми в соцмережах:",
    },
  },

  ru: {
    translation: {
      openGame: "ОТКРЫТЬ ИГРУ",
      downloadCasino: "Скачать казино",
      playMin: "Играй где угодно и когда угодно",
      installApp: "Установить приложение",
      only18: "Только 18+",
      certified: "Казино сертифицировано Anjouan Gaming Authority",
      usOnSocial: "Мы в соцсетях:",
    },
  },
} as const;

export type AppLang = keyof typeof resources; 