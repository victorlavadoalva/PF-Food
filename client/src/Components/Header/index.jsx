import { useLocation } from "react-router"
import NavBar from "../NavBar"
import styles from "./index.module.css"
export default function Header(){
    const location = useLocation()
    return(
        <div className={styles.header}>
            {
            location.pathname !== "/" &&  <NavBar/>
            }
        </div>
    )
}