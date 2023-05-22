import React, { useState } from 'react';
import { Rating, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const Review = ( {id} ) => {
  const [valoracion, setValoracion] = useState(0);
  const [comment, setComment] = useState('');

  const handleValChange = (event, value) => {
    setValoracion(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`https://pf-backend-production-5a61.up.railway.app/restaurants${id}`, {
        valoracion: valoracion,
        comment: comment,
      });
      console.log(response.data); 
      setValoracion(0);
      setComment('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Typography variant="h6">Deja tu valoración:</Typography>
        <Rating name="rating" value={valoracion} onChange={handleValChange} />
      </div>
      <div>
        <TextField
            label="Comentario"
            value={comment}
            onChange={handleCommentChange}
            multiline
            rows={4}
        />
        <br/>
        <div style={{ marginTop: '8px' }}>
            <Button variant="contained" onClick={handleSubmit}>
                Enviar
            </Button>
        </div>
      </div>
    </div>
    
  );
};

export default Review;
