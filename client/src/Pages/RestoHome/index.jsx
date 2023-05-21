import { SimpleCard } from '../../Components/Card/index';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./styles.module.css";

export default function Home() {

  const {restorants} = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {
          restorants?.documents?.length ?
            restorants?.documents?.map(resto => {
              return (
                <SimpleCard
                  key={resto._id}
                  image={resto.image || "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"}
                  title={resto.name}
                  city={resto.city || "Ciudad"}
                  address={resto.adress || "Direccion"}
                  id={resto._id}
                />
              )
            })
            : <p>Loading...</p>
        }
      </div>
    </div>
  );
}