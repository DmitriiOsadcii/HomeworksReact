import { useSelector, useDispatch } from "react-redux";

import Question from "../Question/Question";
import Result from "../Result/Result";

import {
    selectWholeQuestions,
    selectIsSubmitted
} from "../../features/questionnaire/questionnaireSelectors";
import {
    addResult,
    setValidationErrors,
    resetQuestionnaire
} from "../../features/questionnaire/questionnaireSlice";

const Main = () => {
    const questions = useSelector(selectWholeQuestions);
    const isSubmitted = useSelector(selectIsSubmitted);
    const dispatch = useDispatch();

    const onSubmitAnswers = () => {
        dispatch(setValidationErrors());
        const allAnswered = questions.every(q => q.isSelected !== null);
        if (allAnswered) {
            dispatch(addResult());
        }
    };

    const onReset = () => {
        dispatch(resetQuestionnaire());
    };

    return (
        <div >
            <h1 >Questionnaire</h1>
            <ul >
                {questions.map((item) => (
                    <Question key={item.id} item={item} isSubmitted={isSubmitted} />
                ))}
            </ul>
            <div>
                <button
                    onClick={isSubmitted ? onReset : onSubmitAnswers}
                >
                    {isSubmitted ? "Reset" : "Submit"}
                </button>
            </div>
            <Result />
        </div>
    );
};

export default Main;