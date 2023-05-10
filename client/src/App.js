import { Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home/index'
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
// importar componentes
function App() {
  return (
    <div className="App">
      <Routes>
      <header></header>
      <NavBar/>
      <main>
        <Route exact path='/' element ={Landing}/>
        <Route exact path='/Home' element ={Home}/> 
{/* git merge developer */}
      </main>
      <footer></footer>
      </Routes>
    </div>
  );
}

export default App

