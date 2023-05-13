import { useEffect, useState } from 'react';
import SelectSmall from '../../Components/Select';
import { LOCATION, ORDER, RATING } from '../../dataHardcodeo/constants';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleCard } from '../../Components/Card/index';
import PaginationRounded from "../../Components/Paginado";
import * as actions from '../../Redux/actions';
import { RESTOS } from "../../dataHardcodeo/constants";
import styles from "./styles.module.css";

export default function Home() {

  const restorants = useSelector(state => state.restorants);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!restorants.length) dispatch(actions.getRestorants());
    console.log(restorants);
  }, [dispatch, restorants, restorants.length]);

  const [location, setLocation] = useState('');
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const [order, setOrder] = useState('');
  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  const [rating, setRating] = useState('');
  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  return (
    <div className={styles.home}>
      
      {/* La info se obtiene de la carpeta dataHardcodeo hasta que se reciba la info del back */}
      <div className={styles.selectors}>
        <SelectSmall onChange={handleChangeLocation} value={location} items={LOCATION} title="Ubicacion" />
        <SelectSmall onChange={handleChangeOrder} value={order} items={ORDER} title="Ordenar" />
        <SelectSmall onChange={handleChangeRating} value={rating} items={RATING} title="Rating" />
      </div>
      <div className={styles.paginate}>
        <PaginationRounded 
        />
      </div>
      
      <div className={styles.cards}>
        {
          RESTOS.map(resto => {
            return(
              <SimpleCard 
                key={resto.id}
                image={resto.image[0]}
                title={resto.name}
                city={resto.ubic}
                address={resto.dire}
                id={resto.id}
              />
            )
          })
        }
      </div>
    </div>
  );
};

//image, title, description, onClick