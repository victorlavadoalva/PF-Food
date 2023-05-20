import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetUserEmail, Loading } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles.module.css";

export default function Login_Register() {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

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
          <span onClick={() => logout()}>Log out</span>
        </div>
      ) : (
        <div>
          <button
            onClick={() => handleLogin()}
            className={styles.buttonAccount}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}
