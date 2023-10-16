import { useLanguage } from '../contexts/LanguageContext/LanguageContext';


export const useTranslation=()=>{
    const {lang,setLang,langJSON,setLangJSON}=useLanguage()

    const importLangJson=async(filename)=>{
        const x = await import(`languages/${filename}.json`)
        setLang(filename)
        if(x.default){
            setLangJSON(x.default)
        }
    }

    const t=(key)=>{
        return langJSON[key]
    }

    return {importLangJson,t,lang}
}