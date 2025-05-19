import { useSelector } from "react-redux";
import { selectScore } from "../../features/questionnaire/questionnaireSelectors";

const Result = () => {
    const scores = useSelector(selectScore)
    return (
        <div>
            <p>Total score : {scores}</p>
        </div>
    )
}

export default Result;