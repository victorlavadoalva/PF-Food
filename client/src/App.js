import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/index'
import Landing from "./pages/Landing/index";
import NavBar from "./Components/NavBar/index";
// importar componentes
function App() {
  return (
    <div className="App">
      <header></header>
      <NavBar/>
      <main>
      <Routes>
        <Route exact path='/' element ={Landing}/>
        <Route exact path='/home' element ={Home}/> 
      </Routes>
      </main>
      <footer></footer>
    </div>
    
  );
}

export default App;