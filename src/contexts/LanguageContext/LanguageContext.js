import React, { createContext, useContext, useEffect, useState } from 'react';
import engLanguage from "languages/en.json"
export const LangContext=createContext();

export const LangContextProvider=({children})=>{
    const [lang,setLang]=useState("en")
    const [langJSON,setLangJSON]=useState(engLanguage)
    return <LangContext.Provider value={{lang,setLang,langJSON,setLangJSON}}>
        {children}
    </LangContext.Provider>
}

export const useLanguage=()=>{
    const x = useContext(LangContext)
    return x
}