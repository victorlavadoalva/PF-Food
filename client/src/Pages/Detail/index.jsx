import HomeIcon from '@mui/icons-material/Home';
import { ListItemButton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate, useParams } from "react-router-dom";
import { getRestorantsID } from "../../Redux/actions";
import styles from "./styles.module.css";

function Detail() {
  const { restoId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    
    if(restoId) dispatch(getRestorantsID(restoId))
    
    
  }, [dispatch, restoId]);
  
  const restaurant = useSelector((state) => state.RestaurantID)
  console.log(restaurant);

  // Convertir restoId a número
  // const restoIdNumber = parseInt(restoId);



  // Encontrar el objeto del restaurante basado en restoIdNumber
  // const resto = RESTOS.find((resto) => resto.id === restoIdNumber);


  return (
    <div className={styles.detail}>
      <div>
        <h1>{restaurant.name}</h1>
        {/* <Carousel>
          {restaurant.image.map((image, index) => (
            <img key={index} src={image} alt="Restaurant" className={styles.image} />
            ))}
        </Carousel> */}
      </div>
      <div className={styles.container}>
        <p>Ubicación: {restaurant.country}</p>
        <p>Dirección: {restaurant.dire }</p>
        <p>Descripción: {restaurant.descripion || "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste explicabo quaerat aut. Perspiciatis, praesentium similique enim modi eaque expedita quia dicta, animi veritatis quidem quam iusto dolorem eius quis assumenda?" }</p>
        <p>Platos especiales: {"Estos son nuestros platos especiales"}</p>
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