import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { useNavigate } from 'react-router-dom';


export const DrawerContent = ({anchor = 'left'}) => {
    const navigate = useNavigate();

    return (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        >
        <List>
            <ListItem key={'Crear Restaurant'} disablePadding>
                <ListItemButton onClick={() => navigate('/form') }>
                <ListItemIcon>
                    <FoodBankIcon/>                   
                </ListItemIcon>
                <ListItemText primary={'Crear Restaurant'} />
                </ListItemButton>
            </ListItem>
            <ListItem key={'Agregar Plato'} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <DinnerDiningIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Agregar Plato'} />
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem key={'Menú'} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <MenuBookIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Menu'} />
                </ListItemButton>
            </ListItem>
            <ListItem key={'Ver Reservas'} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <BookmarkAddedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Ver Reservas'} />
                </ListItemButton>
            </ListItem>
            <ListItem key={'Pedidos'} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Pedidos'} />
                </ListItemButton>
            </ListItem>         
        </List>
        </Box>
    )    
}