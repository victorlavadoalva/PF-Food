import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles.module.css";
import {useNavigate} from "react-router-dom"
import { useState } from "react";

export default function Login_Register() {
  const navigate = useNavigate()
  const { isAuthenticated, user, loginWithRedirect, logout ,isLoading} = useAuth0();
  const [PerfilActive, setPerfilActive] = useState(false)
const handleAcount = () => {
  navigate("/home/perfil")
}

const handleActivatePerfil = () => {
  if(PerfilActive === true){
    setPerfilActive(false)
  }else{
    setPerfilActive(true)
  }
}

  const handleLogOut = () => {
 window.localStorage.setItem("redirectPath", window.location.pathname);
window.localStorage.removeItem("UserToken")
window.localStorage.removeItem("UserLogVerificate")
    logout()
  }
  const handleLogin = () => {
    window.localStorage.setItem("redirectPath", window.location.pathname);
  
      loginWithRedirect();
  };

  return (
    <>
      {isAuthenticated ? (
        <div className={styles.divUserImage}>
          <div>
          <img
            src={user.picture}
            alt={user.name}
            className={styles.imagePerfil}
            onClick={() => handleActivatePerfil()}
          />
          </div>
          {PerfilActive && 
          <>
          <div className={styles.perfilDesplegable}>
            <div className={styles.perfilname}>
              <p>{user.name}</p>
            </div>
        <div className={styles.selectperfil}>
          <select>
            <option>
              <span onClick={() => handleAcount()}>
                Cuenta
              </span>
            </option>
            <option>
              <span onClick={() => handleLogOut()}>Log out</span>
            </option>
          </select>
          </div>
          </div>
          </>
          }
          
          
        </div>
      ) : (
        <div className={styles.buttonAccount}>
          <button 
            className={styles.btn}
            onClick={() => handleLogin()}
            
          >
            {isLoading ? "Cargando" : "Login"}
          </button>
        </div>
      )}
    </>
  );
}
