import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  removeFromMenu,
  isActive,
}) => {

  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { pathname } = useLocation();

  //const [anchorEl, setAnchorEl] = useState(null);
  //const open = Boolean(anchorEl);
  
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  
  // const handleClose = () => {
  //   //TODO hay que hacer el put y delete
  //   setAnchorEl(null);
  // };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickFavorite = () => {
    // TODO hacer un post a la db para que guarde el valor de favorito para la vista de clientes
    setIsFavorite((prevState) => !prevState);
  };

  const isRestorant = pathname === "/restorant";

  return (
    <Card className={`${isActive ? "" : styles.false}`} sx={{ width: 450}} key={id}>
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
            <ShoppingCartIcon onClick={() => addToCart({ id, name, cost, description: "", image: "" })} />
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
      {isRestorant && (
        <IconButton edge="end" aria-label="delete" onClick={() => removeFromMenu(id)}>
          <DeleteIcon />
        </IconButton>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
