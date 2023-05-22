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
import Loading_Login from "../../View/Loading";
function Landing() {
  const { restorants, loading } = useSelector(state => state);
  const dispatch = useDispatch();

const location = useLocation()




  useEffect(() => {
    if (!restorants.documents) dispatch(getRestorants({}));

  }, [dispatch, restorants.documents, restorants.length]);


  return (
    <>
    
    </>
  );
}

export default Landing;