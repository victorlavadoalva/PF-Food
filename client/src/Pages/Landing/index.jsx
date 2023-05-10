import './index.styles.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import SearchBar from '../../components/searchBar/searchBar.component';
import SearchBar from '../../components/SearchBar';


function Landing() {
    return(
        <div>
            <div>
            <h1>Welcome to FoodBook</h1>
            <img src={logo} alt='logo'></img>
            <SearchBar/>
            <Link to={'/home'}>
              <button>Entrar</button>
            </Link>
            </div>
        </div>
    )
}

export default Landing