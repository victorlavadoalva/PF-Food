import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleCard } from '../../Components/Card/index';
import PaginationRounded from "../../Components/Paginado";
import SelectSmall from '../../Components/Select';
import { getRestorants } from "../../Redux/actions";
import { LOCATION, ORDER, RATING } from '../../dataHardcodeo/constants'; // Cuando tengamos la info del backend esto hay que sacarlo
import styles from "./styles.module.css";

export default function Home() {

  const restorants = useSelector(state => state.restorants);
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');
  const [order, setOrder] = useState('');
  const [rating, setRating] = useState('');
  const [searchName, setSearchName] = useState("")

  useEffect(() => {
    if (order || rating || location){
      dispatch(getRestorants({ order ,rating ,searchName , location}));
    }   
  }, [dispatch, order, rating,location]);
  
  useEffect(() => {
    if (!restorants.length) dispatch(getRestorants());
  }, [dispatch, restorants, restorants.length]);

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  
  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };
  
  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  return (
    <div className={styles.home}>

      {/* La info se obtiene de la carpeta dataHardcodeo hasta que se reciba la info del back */}
      {/* Hay que conectar los filtros con el backend - No están conectados */}
      <div className={styles.selectors}>
        <SelectSmall onChange={handleChangeLocation} value={location} items={LOCATION} title="Ubicacion" />
        <SelectSmall onChange={handleChangeOrder} value={order} items={ORDER} title="Ordenar" />
        <SelectSmall onChange={handleChangeRating} value={rating} items={RATING} title="Rating" />
      </div>
      {/* Conectar el páginado tbm */}
      <div className={styles.paginate}>
        <PaginationRounded
        />
      </div>

      <div className={styles.cards}>
        {
          restorants.length ?
            restorants.map(resto => {
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
};

//image, title, description, onClick