import { createContext } from "react";
import { useState } from "react";
import { arr } from "../data/data";
import MainDiv from "../components/MainDiv/MainDiv";

export const LanguagesContext = createContext();


const Languages = ({ children }) => {


    const [language, setLanguage] = useState('russian');

    const changeLanguage = () => {
        setLanguage((prevLanguage) => {
            const currentIndex = arr.findIndex((item) => item.language === prevLanguage);
            const nextIndex = (currentIndex + 1) % arr.length;
            return arr[nextIndex].language;
        });
    };

    return (
        <LanguagesContext.Provider value={{ language, setLanguage, changeLanguage }}>
            {children}
        </LanguagesContext.Provider>

    )
}
export default Languages;