import { NavLink } from "react-router-dom"
import articles from "../../data/data"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const ArticlePage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const returnBack = () => {
        navigate(-1)

    }
    const article = articles.find(({ id: number }) => number === Number(id));

    const [state, setState] = useState(true)

    const displayContent = () => {
        setState(prevState => !prevState)
    }
    const location = useLocation()
    return (
        <>
            <h2>Статья № {id}</h2>
            {state && <p onClick={displayContent}>Содержание статьи {id}</p>}
            {!state && <p onClick={displayContent}>{article.content}</p>}
            <p>Текущий путь: {location.pathname}</p>
            <button onClick={returnBack}>Назад</button>

        </>

    )
}
export default ArticlePage;