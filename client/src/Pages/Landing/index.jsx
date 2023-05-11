import { Link } from 'react-router-dom';
import SearchBar from '../../Components/SearchBar/index';
import styles from "./index.styles.css";



function Landing() {

    return(
 
        <div className={styles.container}>
                <div></div>
            <h1>Welcome to FoodBook</h1>
            <h3>My Location |</h3>
            <SearchBar/>
            <Link to={'/home'}>
              <button className={styles.button}>Search</button>
            </Link>
            
        </div>

    )
}

export default Landing;