import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en_words } from "./en";
import { pt_words } from "./pt";

const resources = {
  en: en_words,
  pt: pt_words,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt", 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
