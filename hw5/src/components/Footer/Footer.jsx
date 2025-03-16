import styles from "./Footer.module.css"
export const Footer = () => {
    return (
        <div className={styles.divFooter}>
            <button className={styles.btn}><img src="src\assets\Subtract.svg" alt="ios" /></button>
            <button className={styles.btn}><img src="src\assets\Subtract2.svg" alt="google" /></button>
            <button className={styles.btn}><img src="src\assets\Subtract3.svg" alt="" /></button>
        </div>
    )
}