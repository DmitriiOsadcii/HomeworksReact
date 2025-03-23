import { createContext } from "react";
import { useState } from "react";

import MainDiv from "../components/MainDiv/MainDiv";

export const LanguagesContext = createContext();



const Languages = ({ children }) => {


    const [language, setLanguage] = useState(0)


    return (
        <LanguagesContext.Provider value={[language, setLanguage]}>
            {children}
        </LanguagesContext.Provider>

    )
}
export default Languages;