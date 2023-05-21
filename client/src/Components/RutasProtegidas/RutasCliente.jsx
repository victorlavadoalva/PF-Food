import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";


export default function RutasCliente(){

const { isAuthenticated, loginWithRedirect, user } = useAuth0();


    if (!isAuthenticated) {
        return loginWithRedirect();
    }
    return <Outlet />;
}


