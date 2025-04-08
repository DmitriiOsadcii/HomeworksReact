import { createContext } from "react";
import { useState } from "react";
import { arr } from "../data/data";
import MainDiv from "../components/MainDiv/MainDiv";

export const LanguagesContext = createContext();


const Languages = ({ children }) => {


    const [language, setLanguage] = useState('russian');

    const changeLanguage = () => {
        const currentIndex = arr.findIndex((item) => item.language === language);
        const nextIndex = (currentIndex + 1) % arr.length;
        setLanguage(arr[nextIndex].language)
    };

    return (
        <LanguagesContext.Provider value={{language, setLanguage, changeLanguage}}>
            {children}
        </LanguagesContext.Provider>

    )
}
export default Languages;