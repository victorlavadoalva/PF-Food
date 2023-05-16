import HomeIcon from '@mui/icons-material/Home';
import { ListItemButton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate, useParams } from "react-router-dom";
import { getRestorantsID } from "../../Redux/actions";
import styles from "./styles.module.css";
import { Carousel } from 'react-responsive-carousel';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

function Detail() {
  const { restoId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    console.log('restoId:', restoId);
    if(restoId) dispatch(getRestorantsID(restoId))
  }, [dispatch, restoId]);
  
  const restaurant = useSelector((state) => state.RestaurantID)
  console.log('restaurant:', restaurant);

  // Convertir restoId a número
  // const restoIdNumber = parseInt(restoId);



  // Encontrar el objeto del restaurante basado en restoIdNumber
  // const resto = RESTOS.find((resto) => resto.id === restoIdNumber);


  return (
    <div className={styles.detail}>
      <div>
        <Typography component='h2' variant='h2' style={{ marginBottom: '8px' }}>{restaurant.name}</Typography>
        {restaurant.image ? (
          <Carousel>
            {restaurant.image.map((image, index) => (
              <img key={index} src={image} alt="Restaurant" className={styles.image} />
            ))}
          </Carousel>
        ) : (
        <Typography component="p" style={{ marginBottom: '8px' }}>No hay imágenes disponibles</Typography>
         )}
      </div>
      <div className={styles.container}>
         <Typography component="p" style={{ marginBottom: '8px' }}>Ubicación: {restaurant.city + ', ' + restaurant.country}</Typography>
         <Typography component="p" style={{ marginBottom: '8px' }}>Dirección: {restaurant.adress}</Typography>
         <Typography component="p" style={{ marginBottom: '8px' }}>Teléfono: {restaurant.phoneNumber}</Typography>
         <Typography component="p" style={{ marginBottom: '8px' }}>Descripción: {restaurant.description}</Typography>
         <Typography component="p" style={{ marginBottom: '8px' }}>Capacidad: {restaurant.capacity}</Typography>
         <Typography component="p" style={{ marginBottom: '8px' }}>Tags: {restaurant.tags}</Typography>
         <Typography component="p" style={{ marginBottom: '8px' }}>Calificación</Typography>
         <Rating name="read-only" defaultValue={restaurant.rating} readOnly />
      </div>
      <div>
        <ListItemButton onClick={() => navigate('/home')}>
          <HomeIcon sx={{ fontSize: 40, color: '#3A506B' }}/>
        </ListItemButton>
      </div>

    </div>
  );
}

export default Detail;