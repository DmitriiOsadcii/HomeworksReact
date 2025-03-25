import Answer from "./Answer";
import { useState } from "react";
const MathQuiz = () => {
    const expression = {
        a: Math.floor(Math.random() * 100),
        b: Math.floor(Math.random() * 100),
        get result() {
            return this.a + this.b
        }
    }
    const [points, setPoints] = useState(0)

    const updatePoints = (answer) => {
        const correctAnswer = expression.result;
        const parsedAnswer = parseInt(answer);

        // Проверка на NaN и сравнение с правильным ответом
        if (parsedAnswer === correctAnswer) {
            setPoints(prevState => prevState + 5);
        } else {
            setPoints(prevState => prevState - 5);
        }
    }
    return (
        <div>
            <h4>Ваши очки: {points}</h4>
            <p>{expression.a} + {expression.b} = ?</p>
            <Answer updatePoints={updatePoints} />
        </div>
    )
}
export default MathQuiz;