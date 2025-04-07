import { Link } from "react-router-dom";
import styles from './Main.module.css'
const Main = () => {
    return (
        <>
            <Link className={styles.link} to='/'>Main Page</Link>
            <Link className={styles.link} to='/articles'>Articles</Link>
        </>
    )
}
export default Main;