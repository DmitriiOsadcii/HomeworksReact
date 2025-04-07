import { Link } from "react-router-dom";
import styles from './PostList.module.css'
import articles from "../../data/data";
import { useParams } from "react-router-dom";
const PostListPage = () => {



    const { id } = useParams()

    const element = articles.map(({ id, title, }) => <Link to={`/articles/${id}`} key={id}>{title}{id}</Link>)
    return (
        <>

            <p>Post List :</p>
            <div className={styles.link}>
                {element}
            </div>

        </>

    )
}
export default PostListPage;