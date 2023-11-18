import React, { createContext, useState } from "react"
import { english, spanish } from "../data/constants"


export const languageContext = createContext()


export const LanguageProv = ({children}) => {

    const [language, setLanguage] = useState(english)

    const changeLanguage = () => {
        if(language.myLanguage == "EN"){
            setLanguage(spanish)
        }else{
            setLanguage(english)
        }
    }

    return(
        <languageContext.Provider value={{language, changeLanguage}}>
                {children}
        </languageContext.Provider>
    )
}


