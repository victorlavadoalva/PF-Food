import React from "react";
import { useParams } from "react-router-dom";
import { RESTOS } from "../../dataHardcodeo/constants";
import { Link } from "react-router-dom";

function Detail() {
  const { restoId } = useParams();

  // Convertir restoId a número
  const restoIdNumber = parseInt(restoId);

  // Encontrar el objeto del restaurante basado en restoIdNumber
  const resto = RESTOS.find((resto) => resto.id === restoIdNumber);


  return (
    <div>
      <Link to='/'>
        <button>Vover</button>
      </Link>
      <h2>{resto.name}</h2>
      <p>Ubicación: {resto.ubic}</p>
      <p>Dirección: {resto.dire}</p>
      <p>Descripción: {resto.summary}</p>
      <p>Platos especiales: {resto.especial}</p>
      {resto.image.map((image, index) => (
        <img key={index} src={image} alt={`Imagen ${index + 1}`} />
      ))}


    </div>
  );
}

export default Detail;