import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Detail from "./Pages/Detail/index";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing/index.jsx";
function App() {
const location = useLocation()
  return (
    <div className="app">
      {
       location.pathname !== "/" && <header>
        <Header/>
      </header>
      }
      <main className="main">
      <Routes>
        <Route exact path='/' element ={<Landing/>}/>
        <Route exact path='/home' element ={<Home/>}/> 
        <Route exact path='/detail/:restoId' element ={<Detail/>}/>
      </Routes>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

