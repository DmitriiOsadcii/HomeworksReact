import { useState } from "react"
import { ratingList } from "./ratingList"

export const Rating = () => {

    const [ratingValue, setRatingValue] = useState(0)
    function changeRating(img) {
        setRatingValue(img)
    }


    return (
        <div>
            <div>
                <img src={ratingList[ratingValue]} alt='#' />
            </div>
            <div>
                <button onClick={() => changeRating(0)}>Отлично</button>
                <button onClick={() => changeRating(1)}>Хорошо</button>
                <button onClick={() => changeRating(2)}>Приемлемо</button>
                <button onClick={() => changeRating(3)}>Плохо</button>
            </div>

        </div>
    )
}
