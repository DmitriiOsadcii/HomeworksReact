import { useRef } from "react";
import { useEffect } from "react";


const ValueDisplay = ({ value }) => {
    const inputRef = useRef(value)
    useEffect(() => {
        inputRef.current = value
    }, [value])

    return (
        <div>
            <p>Current Value: {value}</p>
            <p>Previous Value: {inputRef.current}</p>
        </div>

    )
}
export default ValueDisplay;