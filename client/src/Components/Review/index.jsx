import React, { useState } from 'react';
import { Rating, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event, value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://pf-backend-production-5a61.up.railway.app/restaurants", {
        rating: rating,
        comment: comment,
      });
      console.log(response.data); 
      setRating(0);
      setComment('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Typography variant="h6">Deja tu valoración:</Typography>
        <Rating name="rating" value={rating} onChange={handleRatingChange} />
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
