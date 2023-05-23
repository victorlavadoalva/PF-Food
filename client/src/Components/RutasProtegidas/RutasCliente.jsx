import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

export default function RutasCliente(){
    const redirection = "/restorant"
    const navigate = useNavigate()
    const dataUser = window.localStorage.getItem("UserLogVerificate")
    const [shouldRedirect, setShouldRedirect] = useState(false);
    

    // if (shouldRedirect) {
    //     alert("Inicia sesion con una cuenta Cliente");
    //   navigate(redirection);
    //   return null; // Evitar que se muestre la ruta antes de redirigir
    // }
    
    return <Outlet />;
}


