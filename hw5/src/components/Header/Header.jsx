import styles from "./Header.module.css"
export const Header = () => {
    return (
        <div className={styles.headerDiv}>
            <img className={styles.spotify} src="src\assets\spotify.svg" alt="spotify" />
            <p className={styles.headerTitle}>Spotify</p>
        </div>
    )
}