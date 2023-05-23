import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { GetUserEmail, LoadingApp } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";

export default function RutasUsers() {
  const { userFoundByEmail, tokenLogin } = useSelector((state) => state);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const redirection = "/user-type";
  const rastaurantRoute ="/restorant"
  const direcciones = location.pathname !== "/form" &&
                      location.pathname !== "/restorant" &&
                      location.pathname !== "pedidos" &&
                      location.pathname !== "add_food" &&
                      location.pathname !== "menu" &&
                      location.pathname !== "reservas" 

  console.log("Verificado", isAuthenticated);
  console.log("isLoading", isLoading);
  const [saveEmail, setSaveEmail] = useState("");

  useEffect(() => {
    if(!isAuthenticated){
      window.localStorage.setItem("IsLogin", false)
    }
  },[])
  useEffect(() => {
    if (isAuthenticated) {
      setSaveEmail(user.email);
      const objUser = JSON.stringify(user);
      window.localStorage.setItem("UserVerificated", objUser);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (saveEmail) {
      console.log(saveEmail);
      dispatch(GetUserEmail({ saveEmail }));
    }
  }, [dispatch, saveEmail]);

  useEffect(() => {
    if(userFoundByEmail.length ){
      window.localStorage.setItem("IsLogin", JSON.stringify(false));
    }
    
    const checkIfNewUser = async () => {
      const isLoginString = window.localStorage.getItem("IsLogin");
       const isLogin = JSON.parse(isLoginString);
      if(!isLogin){
        console.log("isLogin", isLogin)
         if (userFoundByEmail[0] === true) {
        console.log("!!!!!!Es un usuario Cliente")
        const objUser = JSON.stringify(userFoundByEmail[1]);
        const storedPath = localStorage.getItem("redirectPath");
        console.log(storedPath);
        window.localStorage.setItem("UserLogVerificate",objUser)
        window.localStorage.setItem("IsLogin", true)
        navigate(storedPath);
        window.localStorage.removeItem("redirectPath")
        dispatch(LoadingApp(false))
      }else if(userFoundByEmail[0] === true && userFoundByEmail[1].type_customer === "Restaurante"){
        console.log("!!!!!!Es un usuario Restaurante")
        const objUser = JSON.stringify(userFoundByEmail[1]);
        window.localStorage.setItem("UserLogVerificate",objUser)
        navigate(rastaurantRoute)
        window.localStorage.removeItem("redirectPath")
        dispatch(LoadingApp(false))
      }else if (userFoundByEmail[0] === false  && 
        direcciones ) {
        console.log("!!!!!!!NO esta Registrado")
        window.localStorage.removeItem("redirectPath")
        navigate(redirection);
        dispatch(LoadingApp(false))
      }
      }
     
    };

    checkIfNewUser();
  }, [userFoundByEmail, navigate]);

  return <Outlet />;
}
