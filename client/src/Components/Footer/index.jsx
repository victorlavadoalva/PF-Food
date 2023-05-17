import { useLocation } from "react-router-dom"
import styles from "./styles.module.css"
export default function Footer(){
    const location = useLocation()
    return (
        <footer className={location.pathname === "/" ? styles.footerLanding : styles.footerHome}>

        </footer>
    )
}