import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

const savedLang = localStorage.getItem('lang');
const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: savedLang || browserLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    }
  });

export default i18n;