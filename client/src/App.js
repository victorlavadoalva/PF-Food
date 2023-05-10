import { Routes } from "react-router-dom";
import './App.css';
// importar componentes
function App() {
  return (
    <div className="App">
      <Routes>
      <header></header>
      {/* nav  component*/}
      <main>
        {/* Descomentar: <Route exact path='/' element ={}/>
        <Route exact path='/Home' element ={}/> */}

      </main>
      <footer></footer>
      </Routes>
    </div>
  );
}

export default App;
