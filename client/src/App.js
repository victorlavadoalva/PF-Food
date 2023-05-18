import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RutasAdmin from "./Components/RutasProtegidas/RutasAdmin";
import RutasCliente from "./Components/RutasProtegidas/RutasCliente";
import RutaRestaurant from "./Components/RutasProtegidas/RutasNegocio";
import Error404 from "./Pages/404";
import Detail from "./Pages/Detail/index";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing/index.jsx";
import AdminUser from "./View/AdminUsers";
import UserType from "./View/SelectType";
import styles from "./styles.module.css";
function App() {

  const location = useLocation()

  return (
    <div className={styles.app}>
      {
       location.pathname !== "/" && location.pathname !== "/user-type" && <Header/>
      }
      <main className={styles.main}>
        <Routes>
            <Route element={<RutasAdmin/>}>
                <Route path="/admin/usuarios" element={<AdminUser/>}/>
            </Route>
            <Route path="/user-type" element={<UserType/>}/>
            <Route element={<RutaRestaurant/>}>
                  <Route path="/create_restorant"/>
                  <Route path="/restorant"/>
                  <Route exact path='/form' element={<Form />} />
            </Route>
            <Route element={<RutasCliente/>  }>
                  {/* <Route exact path='/home' element={<Home />} /> */}
            </Route> 

          <Route  path='/' element={<Landing />} >
              <Route  path='home' element={<Home />} >
                  <Route path='detail/:restoId' element={<Detail />} />
              </Route>
          </Route>

          
          
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

