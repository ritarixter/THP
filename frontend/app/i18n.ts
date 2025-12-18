import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import de from "./locales/de.json";

const resources = {
  en: { translation: en },
  de: { translation: de },
};

// Получаем язык на сервере и клиенте одинаково
const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return "en"; // На сервере всегда en
  }
  return localStorage.getItem("language") || "en";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false, // Отключаем Suspense для SSR
  },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lng);
  }
});

export default i18n;
