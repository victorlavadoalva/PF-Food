import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
export default function RutaRestaurant(){
const navigate = useNavigate()
const redirection = "/"
const dataUser = window.localStorage.getItem("UserLogVerificate")
const restaurant = JSON.parse(dataUser)
const [shouldRedirect, setShouldRedirect] = useState(false);
const {type_customer} = restaurant
console.log("DataRuta",type_customer)
useEffect(() => {
  if (type_customer !== "Restaurante") {
    
    setShouldRedirect(true);
  }
}, [dataUser]);
console.log("RedirectRuta", shouldRedirect)
if (shouldRedirect) {
    alert("No tienes permisos en esta ruta");
  navigate(redirection);
  return null; // Evitar que se muestre la ruta antes de redirigir
}

return <Outlet />;
}