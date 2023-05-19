import { useAuth0 } from '@auth0/auth0-react';
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import CardLanding from "../../Components/CardLanding";
import { getRestorants, PostUser , GetUserEmail} from "../../Redux/actions";
import { props } from "../../dataHardcodeo/constants";
import Carousel from "./Carrusel";
import { Outlet } from 'react-router-dom';
import styles from "./styles.module.css";
import { useLocation } from 'react-router-dom';
function Landing() {
  const {restorants, userFoundByEmail} = useSelector(state => state);
  const dispatch = useDispatch();
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
const location = useLocation()
const redirection = "/user-type"
const [savedData , setSaveData] = useState(false)
const [saveEmail , setSaveEmail] = useState("")
const [redirected, setRedirected] = useState(false);
console.log(user)

const navigate = useNavigate();


useEffect(() => {
     if(isAuthenticated){
          setSaveEmail(user.email)
     }
},[isAuthenticated])

useEffect(() => {
  if(saveEmail){
    console.log(saveEmail)
      dispatch(GetUserEmail({saveEmail}));
  }

},[dispatch, saveEmail])


useEffect(async() => {

    
    console.log("useEffect foundByemail", userFoundByEmail)
    const checkIfNewUser = async () => {
      if (userFoundByEmail && redirected) {
        const storedPath = localStorage.getItem('redirectPath') || '/';
        navigate(storedPath)
        setRedirected(true);
      } else if (!redirected) {
        setTimeout(() => {
        // navigate(redirection)
        // setRedirected(true);
        },3000)
        
      }
    };
  
    checkIfNewUser()
  
}, [userFoundByEmail, redirected]);


  useEffect(() => {
    if (!restorants.documents) dispatch(getRestorants({}));
   
  }, [dispatch, restorants.documents, restorants.length]);
  

  const handleLogout = () => {
    logout()
    setSaveData(false)
  }

  const handleLogin = () => {
    window.localStorage.setItem('redirectPath', window.location.pathname);
    
    loginWithRedirect();
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
          {(isAuthenticated)?(
            <div id='miDiv' className={styles.divUser}>
              <p>{user.name}</p>
              <img src={user.picture} alt={user.name} style={{ borderRadius: '50%', maxWidth: '4rem' }}/>
              <span onClick={() => handleLogout()}>Log out</span>
            </div>
          ):(
            <button onClick={() => handleLogin()} className={styles.buttonAccount}>Login</button>
          )}      
        <div className={styles.container_carousel}>
          <Carousel/>
        </div>           
        </div>
      </div>
    </div>
    }
    
    <Outlet/>
    </>
  );
}

export default Landing;
