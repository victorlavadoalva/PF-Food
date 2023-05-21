import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";

export default function RutaRestaurant(){
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();



    return <Outlet />;
}