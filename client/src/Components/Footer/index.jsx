import { useLocation } from "react-router-dom"
import styles from "./styles.module.css"
export default function Footer(){
    const location = useLocation()
    return (
        <footer className={location.pathname === "/" || location.pathname === "/landing" ? styles.footerLanding : styles.footerHome}>

        </footer>
    )
}