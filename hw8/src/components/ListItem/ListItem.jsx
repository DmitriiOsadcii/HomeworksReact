import { useState, useEffect } from "react";


const ListItem = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log("Компонент ListItems обновлен");
    }, [])

    const addItem = () => {

        setItems(prevValue => [...prevValue, inputValue])
        setInputValue('')
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }


    const elements = items.map(item => <li key={item}>{item}</li>)
    return (

        <div>
            <textarea onChange={handleChange} value={inputValue}></textarea>
            <button onClick={addItem}>Добавить</button>
            <ul>
                {elements}
            </ul>
        </div>

    )

}
export default ListItem;