import styles from "./styles.module.css";
import SerchBar from '../SearchBar/index'

export default function NavBar() {
    return (   
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <SerchBar />
            </div>
            <div className={styles.buttons}>
                <button className={styles.navButton}>Contacto</button>
                <button className={styles.navButton}>Conocenos</button>
                <button className={styles.navButton}>Cerrar sesion</button>
            </div>
        </div>
    );
};