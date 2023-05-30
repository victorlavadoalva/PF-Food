import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function RutaRestaurant() {
  
  const { error } = useSelector((state) => state);
  const navigate = useNavigate()
  const redirection = "/"
  const [shouldRedirect, setShouldRedirect] = useState(false);
  let type_customer = "";

  useEffect(() => {
    const dataUser = window.localStorage.getItem("UserLogVerificate");
    if (dataUser) {
      const restaurant = JSON.parse(dataUser);
      type_customer = restaurant.type_customer;
console.log(type_customer)
      if (type_customer !== "Restaurant" || !type_customer) {
        setShouldRedirect(true);
      }
    } else {
      setShouldRedirect(true);
    }
    
  }, []);

  // useEffect(() => {
  //   console.log("ErrorActions",error)
  //     if(error.length){
  //       // alert(error[1])
  //     }
  // },[error.length])

  if (shouldRedirect) {
    navigate(redirection);
    return null; // Evitar que se muestre la ruta antes de redirigir
  } else {
    return <Outlet />;
  }

}