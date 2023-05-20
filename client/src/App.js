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
import Home from "./Pages/Home";
import Landing from "./Pages/Landing/index.jsx";
import AdminUser from "./View/AdminUsers";
import Loading_Login from "./View/Loading";
import UserType from "./View/SelectType";
import styles from "./styles.module.css";

function App() {
  const location = useLocation();
  const { loading } = useSelector((state) => state);
  return (
    <>
      {loading ? (
        <Loading_Login />
      ) : (
        <div className={styles.app}>
          {location.pathname !== "/" && location.pathname !== "/user-type" && (
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
                <Route path="/" element={<Landing />}>
                  <Route path="home" element={<Home />}>
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
                {/* Usuario tipo Cliente */}
                <Route element={<RutasCliente />}>
                  {/* <Route exact path='/home' element={<Home />} /> */}
                </Route>
                {/* -------------------------------------------------------------------------------------- */}
                {/* Usuario tipo Restaurante */}
                <Route element={<RutaRestaurant />}>
                  <Route exact path="/form" element={<Form />} />
                  <Route path="/restorant" >
                      <Route path="pedidos" />
                      <Route path="add_food" />
                      <Route path="menu" />
                      <Route path="reservas" />
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
      )}
    </>
  );
}

export default App;
