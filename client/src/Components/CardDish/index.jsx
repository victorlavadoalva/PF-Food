import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardDish = ({
  image,
  name,
  tags,
  cost,
  id,
  description,
  addToCart,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    //TODO hay que hacer el put y delete
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickFavorite = () => {
    // TODO hacer un post a la db para que guarde el valor de favorito para la vista de clientes
    setIsFavorite((prevState) => !prevState);
  };

  const isRestorant = pathname === "/restorant";


  return (
    <Card sx={{ width: 600 }} key={id}>
      <div className={styles.headerContainer}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          className={styles.image}
          sx={{ width: "100px" }}
        />
        <div className={styles.infoContainer}>
          <CardHeader
            // Despues ver si la action para editar y eliminar se implementa en la cards o no
            // action={
            //   <>
            //     <IconButton aria-label="settings" onClick={handleClick}>
            //       <MoreVertIcon />
            //     </IconButton>
            //     <Menu
            //       id="menu-appbar"
            //       anchorEl={anchorEl}
            //       anchorOrigin={{
            //         vertical: "top",
            //         horizontal: "right",
            //       }}
            //       keepMounted
            //       transformOrigin={{
            //         vertical: "top",
            //         horizontal: "right",
            //       }}
            //       open={Boolean(anchorEl)}
            //       onClose={handleClose}
            //     >
            //       <MenuItem onClick={handleClose}>Editar</MenuItem>
            //       <MenuItem onClick={handleClose}>Eliminar</MenuItem>
            //     </Menu>
            //   </>
            // }
            title={name}
            className={styles.header}
            sx={{ padding: 0 }}
          />
          <CardContent sx={{ padding: 0 }}>
            <Typography variant="body2" color="text.secondary">
              {tags.map((tag, i) => (
                <span key={i}>
                  {tag}
                  {i !== tags.length - 1 && <br />}
                </span>
              ))}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${cost}
            </Typography>
          </CardContent>
        </div>
      </div>
      {!isRestorant && (
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={handleClickFavorite}
          >
            <FavoriteIcon sx={{ color: isFavorite ? "red" : "gray" }} />
          </IconButton>
          <IconButton aria-label="shopping">
            <ShoppingCartIcon onClick={() => addToCart({ id, name, cost })} />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
