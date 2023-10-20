import React, { createContext, useContext, useState } from 'react';
import messagesJSON from "compiled-lang/en.json"
export const LangContext=createContext();

export const LangContextProvider=({children})=>{
    const [lang,setLang]=useState("en")
    const [messages,setMessages]=useState(messagesJSON)
    return <LangContext.Provider value={{lang,messages,setMessages,setLang}}>
        {children}
    </LangContext.Provider>
}

export const useLanguage=()=>{
    return useContext(LangContext)
}