import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

import styles from "./styles.module.css";
import DataGridDemo from "../../Components/Pedidos";
import PedidosCliente from "../../Components/PedidosCliente";
import ReservasCliente from "../../Components/ReservasCliente";

export default function CuentaCliente() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(
        value
      )
    );
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUpdateAccount = () => {};

  return (
    <div >
      <Box
        className={styles.container}
      >
        <Box
          sx={{
            // marginLeft: "10%",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: 500,
            },
          }}
        >
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h5" align="left">
              Mi Cuenta
            </Typography>
            <TextField
              label="Nombre Completo"
              value={name}
              onChange={handleChangeName}
              fullWidth
              margin="normal"
              disabled
            />
            <TextField
              label="Contraseña"
              value={password}
              onChange={handleChangePassword}
              fullWidth
              margin="normal"
              type={showPassword ? "text" : "password"}
              error={passwordError}
              helperText={
                passwordError &&
                "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial (!@#$%^&*)."
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={togglePasswordVisibility}
                      disableRipple
                      sx={{
                        minWidth: "auto",
                        color: "#3A506B",
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Email"
              value={email}
              onChange={handleChangeEmail}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Teléfono"
              value={phone}
              onChange={handleChangePhone}
              fullWidth
              margin="normal"
            />

            <Button
              variant="contained"
              sx={{ background: "#3A506B" }}
              onClick={handleUpdateAccount}
            >
              Actualizar
            </Button>
          </Paper>
        </Box>

        <Box
          sx={{
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: 500,
            },
          }}
        >
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h5" align="left">
              Mis Pedidos
            </Typography>
            <PedidosCliente />
          </Paper>
        </Box>
        <Box
          sx={{
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: 500,
            },
          }}
        >
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h5" align="left">
              Mis Reservas
            </Typography>
            <ReservasCliente />
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
