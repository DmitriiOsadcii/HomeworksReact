import { useContext } from "react";
import { LanguagesContext } from "../../providers/Languages";

import { arr } from "../../data/data";

export const Button = () => {
    const [language, setLanguage] = useContext(LanguagesContext)

    const changeLanguage = () => {
        const currentIndex = arr.findIndex((item) => item.language === language);
        const nextIndex = (currentIndex + 1) % arr.length;
        setLanguage(arr[nextIndex].language)
    };

    return (
        <button onClick={changeLanguage}>Поменять язык</button>
    )
}
