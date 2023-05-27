import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardDish } from '../CardDish';
import styles from '../../Pages/MenuClientes/styles.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { getDish } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [link, setLink] = useState();
  const [confirmed, setConfirmed] = useState(false)
  const {dishes} = useSelector(state => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  


  useEffect(() => {
    dispatch(getDish(id));
  }, [dispatch, id]);
  console.log('carta: ', dishes);
  

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    console.log('Removing product with _id:', productId);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.cost, 0);
  };

  async function payment() {
    setConfirmed(true)
    const response = await axios.post("https://pf-backend-production-83a4.up.railway.app/payment", cartItems);
    setLink(response.data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerCart}>
        <Typography variant="h5" gutterBottom>
          Tu Carrito:
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="body1">Tu carrito esta vacio.</Typography>
        ) : (
          <>
            {/* Render the cart items */}
            <List>
              {cartItems.map((item) => (
                console.log('CartItem:', item),
                <ListItem key={item._id} disableGutters >
                  <ListItemText primary={item.name} secondary={`$${item.cost}`} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Typography variant="h6" gutterBottom>
              Total: ${getTotalPrice()}
            </Typography>
            {cartItems.length > 0 && (
              <><Link>
                <Button variant="contained" color="primary" onClick={payment}>
                  Confirmar
                </Button>
              </Link>
                <br></br>
                {
                  confirmed && <span className={styles.confirmed}>Pedido confirmado</span>
                }
                <br></br>
                {
                  confirmed &&
                  <Link to={link}>
                    <Button variant="contained" color="primary">
                      Pagar
                    </Button>
                  </Link>
                }
                <br></br>
              </>
            )}
          </>
        )}
      </div>

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
    </div>
  );
};

export default Cart;
