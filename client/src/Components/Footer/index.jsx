import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export default function Footer() {
  const location = useLocation();
  return (
    <footer
      className={
        location.pathname === "/" ? styles.footerLanding : styles.footerHome
      }
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footer_col}>
            <h4>FoodBook</h4>
            <ul>
              <li>
                <a href="#">Acerca de nosotros</a>
              </li>
              <li>
                <a href="#">Nuestros Desarrolladores</a>
              </li>
              <li>
                <a href="#">Politica de Privacidad</a>
              </li>
              <li>
                <a href="#">Programa de afiliados</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>Obtener Ayuda</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Comprando</a>
              </li>
              <li>
                <a href="#">Estado de orden</a>
              </li>
              <li>
                <a href="#">Opciones de pago</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>Compra en linea</h4>
            <ul>
              <li>
                <a href="#">Restaurantes</a>
              </li>
              <li>
                <a href="#">Tipos de comida</a>
              </li>
              <li>
                <a href="#">Ubicaciones de Restaurantes</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer_col}>
            <h4>follow us</h4>
            <div className={styles.social_links}>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>{" "}
              <a href="#">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
