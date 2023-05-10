import { useState } from 'react';
import SelectSmall from './Components/Select';
import { LOCATION, ORDER, RATING } from './dataHardcodeo/constants';

import styles from "./index.module.css";


export default function Home() {

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
        <div>
            <div className={styles.paginate}>
                <span>ACA VA EL PAGINADO</span>
            </div>

            //La info se obtiene de la carpeta dataHardcodeo hasta que se reciba la info del back
            <div className={styles.selectors}>
                <SelectSmall onChange={handleChangeLocation} value={location} items={LOCATION} title="Ubicacion"/>
                <SelectSmall onChange={handleChangeOrder} value={order} items={ORDER} title="Ordenar"/>
                <SelectSmall onChange={handleChangeRating} value={rating} items={RATING} title="Rating"/>
            </div>
            <div className={styles.cards}>
                <span>ACA VAN LAS CARTAS</span>
            </div>
        </div>
    );
};