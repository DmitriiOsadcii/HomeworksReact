import styles from "./Main.module.css"
export const Main = () => {
    return (
        <div className={styles.divMain}>
            <h1 className={styles.h1Title}>LIFE IS WASTED ON THE LIVING</h1>
            <button className={styles.mainButton}>Sign in with</button>
        </div>
    )
}
