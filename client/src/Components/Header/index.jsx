import { useLocation } from "react-router"
import NavBar from "../NavBar"

export default function Header(){
    const location = useLocation()
    return(
        <div>
            {
            location.pathname !== "/" &&  <NavBar/>
            }
        </div>
    )
}