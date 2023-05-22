import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  Loading , Login} from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles.module.css";

export default function Login_Register() {
  const { isAuthenticated, user, loginWithRedirect, logout ,isLoading} = useAuth0();
const dispatch = useDispatch()
const navigate = useNavigate()
  useEffect(() => {

    dispatch(Loading(false))
  },[isLoading])

  useEffect(() => {
function data(){
  const location = localStorage.getItem('redirectPath');
  if(isAuthenticated, user){
      dispatch(Login({isAuthenticated,user}))
      if(location === "/"){
        navigate("/landing")
      }else if(location ==="/home"){
        navigate("/h")
      }
    }
}
    data();
  },[isAuthenticated,user])
  

  const handleLogOut = () => {
    const location = window.localStorage.setItem("redirectPath", window.location.pathname);
    dispatch(Loading(true))
    if(location === "/landing"){
      navigate("/")
    }else if(location ==="/h"){
      navigate("/home")
    }
    logout()
  }
  const handleLogin = () => {
    window.localStorage.setItem("redirectPath", window.location.pathname);
    if(!isLoading){
      loginWithRedirect();
    }
    
  };

  return (
    <>
      {isAuthenticated ? (
        <div className={styles.divUser}>
          <p>{user.name}</p>
          <img
            src={user.picture}
            alt={user.name}
            style={{ borderRadius: "50%", maxWidth: "4rem" }}
          />
          <span onClick={() => handleLogOut()}>Log out</span>
        </div>
      ) : (
        <div>
          <button
            onClick={() => handleLogin()}
            className={styles.buttonAccount}
          >
            {isLoading ? "Cargando" : "Login"}
          </button>
        </div>
      )}
    </>
  );
}
