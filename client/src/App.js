import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RutasAdmin from "./Components/RutasProtegidas/RutasAdmin";
import RutasCliente from "./Components/RutasProtegidas/RutasCliente";
import RutaRestaurant from "./Components/RutasProtegidas/RutasNegocio";
import RutasUsers from "./Components/RutasProtegidas/RutasUsers";
import Error404 from "./Pages/404";
import Detail from "./Pages/Detail/index";
import Form from "./Pages/Form";
import Pedidos from "./Components/Pedidos";
import Reservas from "./Components/Reservas";
import Home from "./Pages/Home";
import RestoHome from "./Pages/RestoHome";
import Landing from "./Pages/Landing/index.jsx";
import AdminUser from "./View/AdminUsers";
import Loading_Login from "./View/Loading";
import UserType from "./View/SelectType";
import styles from "./styles.module.css";
import MenuCliente from "./Pages/MenuClientes";

function App() {
  const location = useLocation();
  const { loading } = useSelector((state) => state);
  return (
    <div className={styles.app}>
      {
       location.pathname !== "/" && <Header/>
      }
      <main className={styles.main}>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/restorant' element={<RestoHome />} />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/pedidos' element={<Pedidos />} />
          <Route exact path='/reservas' element={<Reservas />} />
          <Route exact path='/detail/:restoId' element={<Detail />} />
          {/* <Route exact path='/formPlatos' element={<FormPlatos />} /> */}
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
