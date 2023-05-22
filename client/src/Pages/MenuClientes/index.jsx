import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaginationRounded from "../../Components/Paginado";
import { getRestorants } from "../../Redux/actions";
import { FOOD } from '../../dataHardcodeo/constants'; // Cuando tengamos la info del backend esto hay que sacarlo
import styles from "./styles.module.css";
import { CardDish } from '../../Components/CardDish';
import Cart from '../../Components/Cart';

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
      <Cart></Cart>
    </div>
  );
};