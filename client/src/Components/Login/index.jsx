import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles.module.css";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import AccountMenu from "./AcountMenu";


export default function Login_Register() {
  const navigate = useNavigate()
  const { isAuthenticated, user, loginWithRedirect, logout ,isLoading} = useAuth0();
  const [PerfilActive, setPerfilActive] = useState(false)
 


const handleActivatePerfil = () => {
  if(PerfilActive === true){
    setPerfilActive(false)
  }else{
    setPerfilActive(true)
  }
}


  const handleLogin = () => {
    window.localStorage.setItem("redirectPath", window.location.pathname);
  
      loginWithRedirect();
  };

  return (
    <>
    {isAuthenticated ? (
<>
<AccountMenu  />
</> 
      ) : (
        <>

        <div className={styles.buttonAccount}>
          <button 
            className={styles.btn}
            onClick={() => handleLogin()}
            
          >
            {isLoading ? "Cargando" : "Login"}
          </button>
        </div>
</>
      )}
    </>
  );
}
