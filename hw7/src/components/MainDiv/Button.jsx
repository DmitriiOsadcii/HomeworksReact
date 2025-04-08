import { useContext } from "react";
import { LanguagesContext } from "../../providers/Languages";


export const Button = () => {
    const {changeLanguage} = useContext(LanguagesContext)

    

    return (
        <button onClick={changeLanguage}>Поменять язык</button>
    )
}
