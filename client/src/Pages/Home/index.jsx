import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { SimpleCard } from '../../Components/Card/index';
import PaginationRounded from "../../Components/Paginado";
import SelectSmall from '../../Components/Select';
import { getRestorants } from "../../Redux/actions";
import { LOCATION, ORDER, RATING, TAGS } from '../../dataHardcodeo/constants'; // Cuando tengamos la info del backend esto hay que sacarlo
import styles from "./styles.module.css";


export default function Home() {
  const locationRouter = useLocation()
  const { restorants } = useSelector(state => state);
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');
  const [order, setOrder] = useState('');
  const [rating, setRating] = useState('');
  const [searchName] = useState("")
  const [tags, setTags] = useState([]);


  useEffect(() => {
    if (order || rating || location || tags) {
      dispatch(getRestorants({ order, rating, searchName, location, tags }));
    }
  }, [dispatch, order, rating, location, tags, searchName]);

  useEffect(() => {
    if (!restorants.documents) dispatch(getRestorants({}));
  }, [dispatch, restorants.documents, restorants.length]);

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  const handleChangeTags = (event) => {
    setTags(event.target.value);
  };

  return (
    <>
      {
        (locationRouter.pathname === "/home" || locationRouter.pathname === "/landing/h") &&
        <div className={styles.home}>
          {/* La info se obtiene de la carpeta dataHardcodeo hasta que se reciba la info del back */}
          {/* Hay que conectar los filtros con el backend - No están conectados */}
          <div className={styles.selectors}>
            <SelectSmall onChange={handleChangeLocation} value={location} items={LOCATION} title="Ubicacion" />
            <SelectSmall onChange={handleChangeOrder} value={order} items={ORDER} title="Ordenar" />
            <SelectSmall onChange={handleChangeRating} value={rating} items={RATING} title="Rating" />
            <SelectSmall onChange={handleChangeTags} value={tags} items={TAGS} title="Tags" />
          </div>
          {/* Conectar el páginado tbm */}
          <div className={styles.paginate}>
            <PaginationRounded
              filters={{ location, rating, order, tags }}
            />
          </div>
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

          {/* Es una prueba para renderizar las cards de los platos */}
          {/* <div className={styles.cardContainer}>
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
      </div> */}
        </div>
      }

      <Outlet />
    </>
  );
};

