import { useDispatch } from "react-redux";
import { addAnswer } from "../../features/questionnaire/questionnaireSlice";

const Question = ({ item, isSubmitted }) => {
    const dispatch = useDispatch();

    const handleChange = (index) => {
        dispatch(addAnswer({ id: item.id, index }));
    };

    return (
        <li>
            <p >{item.question}</p>
            {item.option.map((option, index) => (
                <label key={index} >
                    <input
                        type="radio"
                        name={`question-${item.id}`}
                        value={option}
                        checked={item.isSelected === index}
                        onChange={() => handleChange(index)}
                        disabled={isSubmitted}
                    />
                    {option}
                </label>
            ))}
            {item.hasError && (
                <p>Please answer this question</p>
            )}
        </li>
    );
};

export default Question;