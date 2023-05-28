import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { CardDish } from '../CardDish';
import styles from '../../Pages/MenuClientes/styles.module.css'
import { getDish } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../../Redux/actions';
import Store from '../../Pages/Store'


const Cart = () => {
  const { dishes } = useSelector(state => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDish(id));
  }, [dispatch, id]);

  const addToCart = (product) => {
    dispatch(actions.addToCart(product))
    // window.localStorage.setItem('store', JSON.stringify(cartItems))
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerMenu}>
        <Typography variant="h5" gutterBottom>
          Carta:
        </Typography>
        <div className={styles.cardContainer}>
          {dishes.length === 0 ? (
            <Typography variant="body1">La carta está vacía.</Typography>
          ) : (
            dishes.map((food) => (
              <CardDish
                key={food._id}
                id={food._id}
                image={food.image ? food.image[0] : null}
                name={food.name}
                tags={food.tags}
                cost={food.cost}
                description={food.description}
                className={styles.card}
                addToCart={addToCart}
              />
            ))
          )}
        </div>
      </div>
      <div className={styles.store}>
        <Store />
      </div>
    </div>
  );
};

export default Cart;