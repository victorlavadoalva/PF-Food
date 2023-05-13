import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate, useParams } from "react-router-dom";
import { RESTOS } from "../../dataHardcodeo/constants";
import HomeIcon from '@mui/icons-material/Home';
import { ListItemButton } from "@mui/material";

import styles from "./styles.module.css";

function Detail() {
  const { restoId } = useParams();
  const navigate = useNavigate();

  // Convertir restoId a número
  const restoIdNumber = parseInt(restoId);

  // Encontrar el objeto del restaurante basado en restoIdNumber
  const resto = RESTOS.find((resto) => resto.id === restoIdNumber);


  return (
    <div className={styles.detail}>
      <div>
        <h1>{resto.name}</h1>
        <Carousel>
          {resto.image.map((image, index) => (
            <img key={index} src={image} alt="Restaurant" className={styles.image} />
            ))}
        </Carousel>
      </div>
      <div className={styles.container}>
        <p>Ubicación: {resto.ubic}</p>
        <p>Dirección: {resto.dire}</p>
        <p>Descripción: {resto.summary}</p>
        <p>Platos especiales: {resto.especial}</p>
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