import { CardDish } from '../../Components/CardDish';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./styles.module.css";
import { FOOD } from '../../dataHardcodeo/constants'
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Home() {

  // const { plates } = useSelector(state => state);
  const plates = FOOD;
  const location = useLocation();
  // console.log(plates);

  return (
    <>
      {
        location.pathname === "/restorant" &&
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
                      cost={plate.cost || "0.00"}
                      id={plate.id}
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