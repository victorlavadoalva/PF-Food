import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

export const SimpleCard = ({ image, title, description, id }) => {
  return (
    <Link to={`/detail/${id}`} style={{textDecoration: 'none'}}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Tooltip title={description}>
              <Typography variant="body2" color="text.secondary" className={styles.description}>
                {description}
              </Typography>
            </Tooltip>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}