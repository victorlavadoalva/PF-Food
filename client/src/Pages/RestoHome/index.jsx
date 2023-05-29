import { CardDish } from '../../Components/CardDish';
import { useSelector } from 'react-redux';
import styles from "./styles.module.css";
import { FOOD } from '../../dataHardcodeo/constants'
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export default function Home() {

  // const { plates } = useSelector(state => state);
  const plates = FOOD;
  const location = useLocation();
  const menus = useSelector(state => state.plates);
  const pathname = location.pathname;
  let isRestorant = false
  
  pathname === "/restorant" ? isRestorant = true : isRestorant = false
  
  const removeFromMenu = (id) => {
    const menu = menus.find(menu => menu.id === id);
    menu.isActive= false;
  }

  return (
    <>
      {
        isRestorant &&
        <div className={styles.container}>
          <div className={styles.cards}>
            {
              // plates?.documents?.length ?
              //   plates?.documents?.map(plate => {
              plates.length ?
                plates.map(plate => {
                  return (
                    <CardDish
                      key={plate.id}
                      image={plate.image || "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"}
                      title={plate.name}
                      tags={plate.tags}
                      cost={plate.cost || 0}
                      id={plate.id}
                      isActive={plate.isActive}
                      removeFromMenu={removeFromMenu}
                    />
                  )
                })
                : <p>Loading...</p>
            }
          </div>
        </div>
      }
      <Outlet />
    </>
  );
}