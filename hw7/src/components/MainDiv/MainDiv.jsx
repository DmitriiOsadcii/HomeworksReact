import { useContext } from "react";
import { LanguagesContext } from "../../providers/Languages";
import styles from "./MainDiv.module.css"

const MainDiv = () => {

    const [language, setLanguage] = useContext(LanguagesContext);

    const arr = [{ russian: 'Текущий язык: Русский' }, { english: 'Current language: English' }, { ukranian: 'Сучасна: українська мова' }, { spanish: 'El idioma actual es : español' }];

    const changeLanguage = () => {
        const nextIndex = (language + 1) % arr.length;
        setLanguage(nextIndex);
    };

    const currentLanguage = arr[language];
    const languageKey = Object.keys(currentLanguage);
    const languageText = Object.values(currentLanguage);

    return (
        <div>
            <p>{languageText}</p>
            <button onClick={changeLanguage}>Поменять язык</button>
            <div className={styles[languageKey]}>
            </div>
        </div>
    );
}
export default MainDiv;