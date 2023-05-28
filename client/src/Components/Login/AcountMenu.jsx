import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import styles from "./styles.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom"


export default function AccountMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const { isAuthenticated, user, loginWithRedirect, logout ,isLoading} = useAuth0();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAcount = () => {
    navigate("/home/perfil")
  }
  
  const handleLogOut = () => {
  window.localStorage.setItem("redirectPath", window.location.pathname);
  window.localStorage.removeItem("UserToken")
  window.localStorage.removeItem("UserLogVerificate")
      logout()
  }
  return (
    <React.Fragment>
      <Box className={styles.container}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 1 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 52, height: 52 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            maxHeight: '200px',
            border:3 ,
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr:1,
            },
            "&:before": {
              content: '""',
              display: "flex",
              position: "absolute",
              top: 0,
              left: "45%",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
            pointerEvents: "none",
          }}
        >
          <Avatar /> Franco Krismann
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleAcount()}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogOut()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
