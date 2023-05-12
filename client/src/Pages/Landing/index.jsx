import { Link } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/index";
import img from "../../Img/ImgLanding/Food-landing.png";
import styles from "./styles.module.css";
function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.containerTitle}>
          <h1>Welcome to FoodBook</h1>
          <h3>My Location |  "ubicacion"</h3>
        </div>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        
        <div className={styles.divLink}>
          <Link to={"/home"} style={{textDecoration: 'none'}}>
          <button className={styles.button}>Explorar</button>
        </Link>
        </div>
        <div className={styles.popularCards}>
            
        </div>
      </div>
      <div className={styles.containerImg}>
        
            <div className={styles.elementDesing}>
              <Link to={"/home"} style={{textDecoration: 'none'}}>
                    <button className={styles.buttonAccount}>Cuenta</button>
              </Link>
              <img className={styles.imgFood} src={img}/>
            </div>
      </div>
    </div>
  );
}

export default Landing;
