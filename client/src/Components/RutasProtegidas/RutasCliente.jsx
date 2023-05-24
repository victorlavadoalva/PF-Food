import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

export default function RutasCliente(){
    const redirection = "/home"
    const navigate = useNavigate()
    const dataUser = window.localStorage.getItem("UserLogVerificate")
    const [shouldRedirect, setShouldRedirect] = useState(false);
    
    useEffect(() => {
        if (type_customer !== "Cliente") {
          
          setShouldRedirect(true);
        }
      }, [dataUser]);
      console.log("RedirectRuta", shouldRedirect)
      if (shouldRedirect) {
          alert("Inicia sesion para acceder a esta ruta");
        navigate(redirection);
        return null; // Evitar que se muestre la ruta antes de redirigir
      }
    
    return <Outlet />;
}


