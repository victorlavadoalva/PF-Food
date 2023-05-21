import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, } from "react-router-dom";
import CardLanding from "../../Components/CardLanding";
import { getRestorants, Login, Loading } from "../../Redux/actions";
import { props } from "../../dataHardcodeo/constants";
import Carousel from "./Carrusel";
import { Outlet } from 'react-router-dom';
import styles from "./styles.module.css";
import { useLocation } from 'react-router-dom';
import Login_Register from '../../Components/Login';
function Landing() {
  const { restorants, loading } = useSelector(state => state);
  const dispatch = useDispatch();
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const location = useLocation()


  useEffect(async () => {

    if (isAuthenticated, user) {
      dispatch(Login({ isAuthenticated, user }))
    }

  }, [isAuthenticated, user])

  useEffect(() => {
    if (!restorants.documents) dispatch(getRestorants({}));

  }, [dispatch, restorants.documents, restorants.length]);


  const handleLogout = () => {
    logout()
  }

  const handleLogin = async () => {
    window.localStorage.setItem('redirectPath', window.location.pathname);
  };


  return (
    <>
      {
        location.pathname === "/" &&

        <div className={styles.container}>
          <div className={styles.containerContent}>
            <div className={styles.containerTitle}>
              <h1>Bienvenido a FoodBook </h1>
            </div>
            <div className={styles.divLink}>
              <Link to={"/home"} style={{ textDecoration: "none" }}>
                <button className={styles.button}>Explorar</button>
              </Link>
            </div>
            <div className={styles.popularCards}>
              <h3 className={styles.category}>Popular Category</h3>
            </div>

            <div className={styles.containerCards}>
              {props.map((el) => (
                <Link key={el.id} to="/home" style={{ textDecoration: "none", color: "black" }}>
                  <CardLanding className={styles.CardPopular} image={el.image} name={el.name} />
                </Link>

              ))}
            </div>

          </div>
          <div className={styles.containerImg}>
            <div className={styles.elementDesing}>
              <Login_Register />
              <div className={styles.container_carousel}>
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      }
      <Outlet />
    </>
  );
}

export default Landing;