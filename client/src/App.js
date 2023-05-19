import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Error404 from "./Pages/404";
import Detail from "./Pages/Detail/index";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing/index.jsx";
import styles from "./styles.module.css";
import FormPlatos from "./Pages/FormPlatos";

function App() {

  const location = useLocation()

  return (
    <div className={styles.app}>
      {
       location.pathname !== "/" && <Header/>
      }
      <main className={styles.main}>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/detail/:restoId' element={<Detail />} />
          <Route exact path='/formPlatos' element={<FormPlatos />} />
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </main>
      {
       <Footer />
      }
        
    </div>
  );
}

export default App;

