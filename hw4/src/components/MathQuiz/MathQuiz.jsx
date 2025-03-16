import Answer from "./Answer";
import { useState } from "react";
const MathQuiz = () => {
    const expression = {
        a: Math.floor(Math.random() * 100),
        b: Math.floor(Math.random() * 100),
        result: function () {
            return this.a + this.b
        }
    }
    const [points, setPoints] = useState(0)

    const updatePoints = (answer) => {
        const correctAnswer = expression.a + expression.b;
        const isCorrect = parseInt(answer) === correctAnswer;
        if (isCorrect) {
            setPoints(points + 5);
        } else {
            setPoints(points - 5);
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