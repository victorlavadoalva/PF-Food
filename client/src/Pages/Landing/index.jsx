import './index.styles.css';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/index';



function Landing() {
    return(
        <div>
            <div>
            <h1>Welcome to FoodBook</h1>
            <SearchBar/>
            <Link to={'/home'}>
              <button>Entrar</button>
            </Link>
            </div>
        </div>
    )
}

export default Landing;