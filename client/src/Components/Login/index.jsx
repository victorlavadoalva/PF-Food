import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles.module.css";

export default function Login_Register() {
  const { isAuthenticated, user, loginWithRedirect, logout ,isLoading} = useAuth0();


  const handleLogOut = () => {
 window.localStorage.setItem("redirectPath", window.location.pathname);
window.localStorage.removeItem("UserToken")
    logout()
  }
  const handleLogin = () => {
    window.localStorage.setItem("redirectPath", window.location.pathname);
  
      loginWithRedirect();
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
