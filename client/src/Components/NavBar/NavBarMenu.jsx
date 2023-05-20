import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAuth0 } from "@auth0/auth0-react";

export const NavBarMenu = ({anchorEl, setAnchorEl}) => {
    const {loginWithRedirect, user, isAuthenticated, logout} = useAuth0()
    const menuId = 'primary-search-account-menu';
    const isMenuOpen = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);
      };

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {isAuthenticated?<>
            <MenuItem onClick={handleMenuClose}>{user.name}</MenuItem>
            <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
            <MenuItem onClick={logout}>Cerrar sesion</MenuItem>
            </>
            :
            <>
            <MenuItem onClick={loginWithRedirect}>Login</MenuItem>
            </>
            }
      </Menu>
    )
}