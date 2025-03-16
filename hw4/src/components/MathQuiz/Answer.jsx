import { useState } from "react";

const Answer = ({ updatePoints }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePoints(value);
        setValue('')
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={value} required onChange={(e) => {
                setValue(e.target.value)
            }} placeholder="Введите ответ" />

            <button>Проверить</button>
        </form>
    )
}
export default Answer;