import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaginationRounded from "../../Components/Paginado";
import { getRestorants } from "../../Redux/actions";
import { FOOD } from '../../dataHardcodeo/constants'; // Cuando tengamos la info del backend esto hay que sacarlo
import styles from "./styles.module.css";
import { CardDish } from '../../Components/CardDish';

export default function MenuCliente() {

  const {restorants} = useSelector(state => state);
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState("")

  useEffect(() => {
    if (searchName){
      dispatch(getRestorants({ searchName }));
    }   
  }, [dispatch]);
  
  useEffect(() => {
    if (!restorants.documents) dispatch(getRestorants({}));
  }, [dispatch, restorants.documents, restorants.length]);

  return (
    <div className={styles.menu}>
      {/* Hay que chequear que muestre la cantidad de paginas dependiendo la cantidad de menu */}
      <div className={styles.paginate}>
        <PaginationRounded/>
      </div>
      {/* Es una prueba para renderizar las cards de los platos */}
      <div className={styles.cardContainer}>
        {FOOD.map((food) => (
          <CardDish
            key={food.id}
            id={food.id}
            image={food.image[0]}
            name={food.name}
            tags={food.tags}
            cost={food.cost}
            description={food.description}
            className={styles.card}          
          />      
        ))}        
      </div>
    </div>
  );
};