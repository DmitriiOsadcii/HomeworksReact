import { useContext } from "react";
import { LanguagesContext } from "../../providers/Languages";
import styles from "./MainDiv.module.css"
import { arr } from "../../data/data";


const MainDiv = () => {

    const [language] = useContext(LanguagesContext);

    
    const currentLanguage = arr.find((item) => item.language === language);
    const languageOf = currentLanguage.language;
    const languageText = currentLanguage.text;

    return (
        <div>
            <p>{languageText}</p>

            <div className={styles[languageOf]}>
            </div>
        </div>
    );
}
export default MainDiv;