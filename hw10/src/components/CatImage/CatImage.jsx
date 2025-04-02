import styles from "./CatImage.module.css"
import { useEffect, useState } from "react";
import { getCatImg } from "../../api/cat";
import { initialState } from "../../data/data";

const CatImage = () => {
    const [state, setState] = useState(initialState)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchImage = async () => {

        try {
            setLoading(true)
            setError(null)
            const data = await getCatImg()
            const cat = data[0]
            setState(cat);
            console.log(data[0]);

        }
        catch (error) {
            setError(`Произошла ошибка : ${error.message}`)
        }
        finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetchImage()
    }, [])

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {!loading && state.url && (
                <div>
                    <h1>Random Cat Image</h1>
                    <img src={state.url} alt="cat" />
                    <button onClick={fetchImage}>Load New Image</button>
                </div>
            )}
        </div>
    )
}
export default CatImage;