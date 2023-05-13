import { useState } from "react";
import { Link } from "react-router-dom";
import CardLanding from "../../Components/CardLanding";
import SearchBar from "../../Components/SearchBar/index";
import img from "../../Img/ImgLanding/Food-landing.png";
import styles from "./styles.module.css";
import { localState } from './localState'


function Landing() {
  const [props, SetProps] = useState(localState);

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
          {props.map((el, index) => (
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "black" }}
              key={index}
            >
              <CardLanding
                className={styles.CardPopular}
                image={el.image}
                name={el.name} />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.containerImg}>
        <div className={styles.elementDesing}>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <button className={styles.buttonAccount}>Cuenta</button>
          </Link>
          <img className={styles.imgFood} src={img} alt={"img"} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
