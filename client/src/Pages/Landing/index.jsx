import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import CardLanding from "../../Components/CardLanding";
import SearchBar from "../../Components/SearchBar/index";
import { getRestorants } from "../../Redux/actions";
import { props } from "../../dataHardcodeo/constants";
import Carousel from "./Carrusel";
import styles from "./styles.module.css";

function Landing() {
  const restorants = useSelector(state => state.restorants);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!restorants.length) dispatch(getRestorants());

  }, [dispatch, restorants, restorants.length]);
  
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
          <Link to={"/home"}  style={{ textDecoration: "none" }}>
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
          <div className={styles.container_carousel}>
            <Carousel/>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Landing;
