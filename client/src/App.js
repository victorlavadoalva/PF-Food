import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Pedidos from "./Components/Pedidos";
import Reservas from "./Components/Reservas";
import RutasAdmin from "./Components/RutasProtegidas/RutasAdmin";
import RutasCliente from "./Components/RutasProtegidas/RutasCliente";
import RutaRestaurant from "./Components/RutasProtegidas/RutasNegocio";
import RutasUsers from "./Components/RutasProtegidas/RutasUsers";
import Error404 from "./Pages/404";
import Detail from "./Pages/Detail/index";
import Form from "./Pages/Form";
import FormPlatos from "./Pages/FormPlatos";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing/index.jsx";
import RestoHome from "./Pages/RestoHome";
import AdminUser from "./View/AdminUsers";
import UserType from "./View/SelectType";
import styles from "./styles.module.css";

function App() {
  const location = useLocation();
  const { loading } = useSelector((state) => state);
  return (
    <>
        <div className={styles.app}>
              {(location.pathname !== "/" && location.pathname !== "/landing" && location.pathname !== "/user-type") && (
            <Header />
          )}
          <main className={styles.main}>
            <Routes>
              {/* Sin iniciar sesion */}
              <Route path="/" element={<Landing />}>
                <Route path="home" element={<Home />}>
                  <Route path="detail/:restoId" element={<Detail />} />
                </Route>
              </Route>
              {/* -------------------------------------------------------------------------------------- */}
              {/* Rutas para usuarios */}
              <Route element={<RutasUsers />}>
                <Route path="/landing" element={<Landing />}>
                  <Route path="h" element={<Home />}>
                    <Route path="detail/:restoId" element={<Detail />} />
                  </Route>
                </Route>
                {/* -------------------------------------------------------------------------------------- */}
                {/* Error 404 */}
                <Route path="*" element={<Error404 />} />
                {/* -------------------------------------------------------------------------------------- */}
                {/* Usuario registrandose */}
                <Route path="/user-type" element={<UserType />} />
                {/* -------------------------------------------------------------------------------------- */}
                {/* Usuaio tipo Cliente */}
                <Route element={<RutasCliente />}>
                  {/* Franco se encarga de terminar esta rutas*/}
                  {/* <Route exact path='/home' element={<Home />} /> */}
                </Route>
                {/* -------------------------------------------------------------------------------------- */}
                {/* Usuario tipo Restaurante */}
                <Route element={<RutaRestaurant />}>
                  {/* Cambiar nombre de la ruta form por ¿"create_restaurant"? */}
                  <Route exact path="/form" element={<Form />} />
                  {/* Al componente de la ruta restorant agregarle el Outlet, Ej:El landing tiene para ver*/}
                  <Route path="/restorant" element={<RestoHome />}>
                    {/*Pasarle los componentes por element*/}
                      <Route path="pedidos" element={<Pedidos />}/>
                      <Route path="add_food" element={<FormPlatos />} />
                      <Route path="menu" />
                      <Route path="reservas" element={<Reservas />}/>
                  </Route>

                  
                </Route>
                {/* -------------------------------------------------------------------------------------- */}
                {/* Rutas Admin */}
                <Route element={<RutasAdmin />}>
                  <Route path="/admin/usuarios" element={<AdminUser />} />
                </Route>
                {/* -------------------------------------------------------------------------------------- */}
                {/* Cierra ruta users */}
              </Route>
            </Routes>
          </main>
          {<Footer />}
        </div>

    </>
  );
}

export default App;
