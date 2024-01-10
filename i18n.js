import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import expoLanguageDetector from "./plugins/expoLanguageDetector";
import { tr, en, fr, ar } from "./locales";

const resources = {
  tr: {
    translation: tr,
  },
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  ar: {
    translation: ar,
  },
};

i18n
  .use(initReactI18next)
  .use(expoLanguageDetector)
  .init({
    compatibilityJSON: "v3",
    resources: resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
