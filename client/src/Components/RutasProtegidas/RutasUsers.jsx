import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet, Navigate} from "react-router-dom";
import { GetUserEmail, LoadingApp, GetTokenLogin } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";

export default function RutasUsers() {
  const { userFoundByEmail, tokenLogin } = useSelector((state) => state);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const redirection = "/user-type";
  const restaurantRoute = "/restorant";

  console.log("Verificado", isAuthenticated);
  console.log("isLoading", isLoading);
  const [saveEmail, setSaveEmail] = useState("");


  useEffect(() => {
    if (isAuthenticated) {
      setSaveEmail(user.email);
      const objUser = JSON.stringify(user);
      window.localStorage.setItem("UserVerificated", objUser);
    }else{
      window.localStorage.setItem("IsLogin", JSON.stringify(false));

    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (saveEmail) {
      dispatch(GetUserEmail({ saveEmail }));
    }
  }, [dispatch, saveEmail]);


  const dataUser = window.localStorage.getItem("UserLogVerificate");
  const restaurant = JSON.parse(dataUser);
  const { type_customer } = restaurant;

  useEffect(() => {


    const checkIfNewUser = async () => {
      const isLoginString = window.localStorage.getItem("IsLogin");
      const isLogin = JSON.parse(isLoginString);
      if (!isLogin) {
        if (userFoundByEmail[0] === true) {
          dispatch(GetTokenLogin("Cliente", userFoundByEmail[1].email));
          const storedPath = localStorage.getItem("redirectPath");
          navigate(storedPath);
          window.localStorage.removeItem("redirectPath");
          dispatch(LoadingApp(false));
        } else if (
          userFoundByEmail[0] === true &&
          userFoundByEmail[1].type_customer === "Restaurante"
        ) {
          dispatch(GetTokenLogin("Restaurante", userFoundByEmail[1].email));
          navigate(restaurantRoute);
          window.localStorage.removeItem("redirectPath");
          dispatch(LoadingApp(false));
        } else if (userFoundByEmail[0] === false) {
          window.localStorage.removeItem("redirectPath");
          navigate(redirection);
          dispatch(LoadingApp(false));
        }
      }
      
    };

    checkIfNewUser();
  }, [dispatch,userFoundByEmail, navigate]);

  useEffect(() => {
if (tokenLogin.token) {
    const objUser = JSON.stringify(tokenLogin);
    window.localStorage.setItem("UserLogVerificate", objUser);
    window.localStorage.setItem("IsLogin", true);
  }
  },[tokenLogin])

  


  if (type_customer === "Restaurante") {
    return <Navigate to={restaurantRoute} />;
  } else {
    return <Outlet />;
  }

}
