import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import { updateAccount } from "../../Redux/actions";

import styles from "./styles.module.css";

import PedidosCliente from "../../Components/PedidosCliente";
import ReservasCliente from "../../Components/ReservasCliente";

export default function CuentaCliente({ userId, userData }) {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [updateSuccess, setUpdateSuccess] = useState(false);

  const { error, updateSuccess } = useSelector((state) => state);

  const userLog = localStorage.getItem("UserLogVerificate");
  const { id, name: storedName, email: storedEmail } = JSON.parse(userLog);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate.push("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      console.log("Error al actualizar la cuenta:", error);
    }
  }, [error]);

  useEffect(() => {
    setName(storedName || "");
    setEmail(storedEmail || "");
    //! TODO descomentar cuando haya info del back
    // setPhone(storedPhone || "");
    // setAddress(storedAddress || "");
  }, [storedName, storedEmail, 
    // storedPhone, storedAddress
  ]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  // const handleChangePassword = (e) => {
  //   const value = e.target.value;
  //   setPassword(value);
  //   setPasswordError(
  //     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(
  //       value
  //     )
  //   );
  // };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleUpdateAccount = () => {
    // console.log("Updating account");
    const userData = {
      name,
      // password,
      email,
      phone,
      address,
      type_customer: "Cliente",
    };

    const hasChanges =
      name !== storedName ||
      email !== storedEmail
      //! TODO descomentar cuando haya info del back 
      // ||
      // phone !== storedPhone ||
      // address !== storedAddress;

    if (hasChanges) {
      dispatch(updateAccount(id, userData));
    }
  };

  return (
    <div>
      <Box className={styles.container}>
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
            {/* <TextField
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
            /> */}
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
            <TextField
              label="Dirección"
              value={address}
              onChange={handleChangeAddress}
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
            {updateSuccess && (
              <Typography variant="body1" color="success" padding="2%">
                ¡La cuenta se ha actualizado con éxito!
              </Typography>
            )}
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
