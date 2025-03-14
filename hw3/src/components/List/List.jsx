import { useState } from "react";
import ListArr from "./list";

const List = () => {

    const [people, setPeople] = useState([...ListArr])


    const changePeople = itemRemove => {
        setPeople(prevState => {
            const newState = prevState.filter(item => item !== itemRemove);
            return newState;

        })
    }
    const element = people.map(item =>
        <li key={item.id}>Имя:  {item.name} <br /> Возраст: {item.age} <button onClick={() => changePeople(item)}>Удалить</button></li>)

    return (
        <div>
            <ul>
                {element}
            </ul>
        </div>
    )
}
export default List;