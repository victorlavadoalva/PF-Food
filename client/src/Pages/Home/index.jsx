import styles from "./index.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles.paginate}>
                <span>ACA VA EL PAGINADO</span>
            </div>
            <div className={styles.selectors}>
                <span>ACA VAN LOS SELECTORES</span>
            </div>
            <div className={styles.cards}>
                <span>ACA VAN LAS CARTAS</span>
            </div>
        </div>
    );
};