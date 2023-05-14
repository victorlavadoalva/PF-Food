import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import CardLanding from "../../Components/CardLanding";
import SearchBar from "../../Components/SearchBar/index";
import chicken from "../../Img/ImgCardLanding/Chicken.png";
import dessert from "../../Img/ImgCardLanding/Dessert.png";
import pasta from "../../Img/ImgCardLanding/Pasta.png";
import sandwich from "../../Img/ImgCardLanding/Sandwich.png";
import burger from "../../Img/ImgCardLanding/hamburger.png";
import pizza from "../../Img/ImgCardLanding/pizza.png";
import img from "../../Img/ImgLanding/Food-landing.png";
import { getRestorants } from "../../Redux/actions";
import styles from "./styles.module.css";

function Landing() {
  const restorants = useSelector(state => state.restorants);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!restorants.length) dispatch(getRestorants());

  }, [dispatch, restorants, restorants.length]);





  
  const [props, SetProps] = useState([
    {
      id: 1,
      image: pizza,
      name: "Pizza",
    },
    {
      id: 2,
      image: burger,
      name: "Burger",
    },
    {
      id: 3,
      image: sandwich,
      name: "Sandwich",
    },
    {
      id: 4,
      image: chicken,
      name: "Chicken",
    },
    {
      id: 5,
      image: pasta,
      name: "Pasta",
    },
    {
      id: 6,
      image: dessert,
      name: "Dessert",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.containerTitle}>
          <h1>Bienvenido a FoodBook </h1>
          <h3>Mi Ubicacion | "ubicacion"</h3>
        </div>
        <div className={styles.searchBar}>
          <SearchBar />
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
              <Link key={el.id} to ="/home" style = {{ textDecoration: "none" , color:"black"}}>
               <CardLanding className={styles.CardPopular}  image={el.image} name={el.name} />
              </Link>
              
            ))}
          </div>
        
      </div>
      <div className={styles.containerImg}>
        <div className={styles.elementDesing}>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <button className={styles.buttonAccount}>Cuenta</button>
          </Link>
          <img className={styles.imgFood} src={img} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
