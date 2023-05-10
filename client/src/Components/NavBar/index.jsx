import styles from "./index.module.css";

export default function NavBar() {
    return (   
        <div>
            <div className={styles.searchBar}>
                <span>SearchBar</span>
            </div>
            <div className={styles.buttons}>
                <button>Contacto</button>
                <button>Conocenos</button>
                <button>Cerrar sesion</button>
            </div>
        </div>
    );
};