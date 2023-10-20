import { useLanguage } from "../contexts/LanguageContext/LanguageContext";

export const useTranslation = () => {
  const { setMessages,setLang } = useLanguage();

  async function loadLocaleData(locale) {
    setLang(locale)
    console.log({locale})
    try {
      switch (locale) {
        case "fr": {
          const messagesRes = await import("compiled-lang/fr.json");
            setMessages(messagesRes)
            return
        }
        default: {
            const messagesRes = await import("compiled-lang/en.json");
          setMessages(messagesRes)
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return { loadLocaleData };
};
