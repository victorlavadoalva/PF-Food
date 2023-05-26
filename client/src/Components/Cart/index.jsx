import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { FOOD } from '../../dataHardcodeo/constants';
import { CardDish } from '../CardDish';
import styles from '../../Pages/MenuClientes/styles.module.css'
import * as actions from '../../Redux/actions'
import Store from '../../Pages/Store';


const Cart = () => {
  
  const dispatch = useDispatch();
  // const cartItems = useSelector(state => state.cart)

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
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      <div className={styles.store}>
        <Store />
      </div>
    </div>
  );
};

export default Cart;