import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import { TextField, Box, Button, Container } from "@mui/material";
import { useRef } from "react";

export default function Form() {
  const [restorants, setRestorants] = useState({
    name: "",
    description: "",
    city: "",
    adress:"",
    country:"",
    phoneNumber:"",
    image: [],
    type_customer: "Restaurant",
    tags: [],
    capacity: ""
  });

  const [errors, setErrors] = useState({
    name: 'Campo Requerido',
    description: '',
    city: "",
    country:"",
    adress:"",
    phoneNumber:"",
    capacity: '',
    image: '',

  });

  function handleSubmit(event) {
    event.preventDefault();
    if (restorants.name && restorants.city && restorants.country && restorants.adress && restorants.description && restorants.capacity) {
      axios.post("https://pf-backend-production-5a61.up.railway.app/restaurants", restorants)
      setErrors({});
      setRestorants({
        name: "",
        description: "",
        city: "",
        country:"",
        adress:"",
        phoneNumber:"",
        image: "",
        type_customer: "Restaurant",
        tags: [],
        capacity: ""
      });
      alert('Restaurante creado')
    } else {
      alert('Información incompleta');
    }
    console.log(restorants)
  };

  const tagsInputRef = useRef(null);

  function handleTags(event) {
    
    event.preventDefault();
    const tagValue = tagsInputRef.current.value;
    if (tagValue.trim() !== "") {
      setRestorants({
        ...restorants,
        tags: [...restorants.tags, tagValue]
      });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    if (name !== "tags") {
      setRestorants({
        ...restorants,
        [name]: value
      })
    };


    switch (name) {
      case 'name':
        validateName(value);
        break;
      case 'description':
        validateDescription(value);
        break;
      case 'capacity':
        validateCapacity(value);
        break;
      case 'city':
        validateCity(value);
        break;
      case 'address':
        validateAddress(value);
        break;
      case 'country':
        validateCountry(value);
        break;
      case 'phoneNumber':
        validatePhoneNumber(value);
        break;  
      case 'image':
        validateImage(value);
        break
      default:
        break;
    }

  };

  const validateName = (name) => {
    if (!/^[\p{L}\d\s.,;()']+$/u.test(name) || name.length < 3) {
      setErrors({ ...errors, name: 'Nombre inválido' });
    } else {
      setErrors({ ...errors, name: '' });
    }
  };
  
  const validateDescription = (description) => {
    if (!/^[\p{L}\d\s.,;()']+$/u.test(description) || description.length < 20) {
      setErrors({ ...errors, description: 'Descripción inválida' });
    } else {
      setErrors({ ...errors, description: '' });
    }
  };
  
  const validateCapacity = (capacity) => {
    if (!/^[\p{L}\d\s.,;()']+$/u.test(capacity)) {
      setErrors({ ...errors, capacity: 'Se requiere capacidad' });
    } else {
      setErrors({ ...errors, capacity: '' });
    }
  };

  const validateCity = (city) => {
    if (!/^[\p{L}\s.,;()']+$/u.test(city)) {
      setErrors({ ...errors, city: 'Ciudad inválida' });
    } else {
      setErrors({ ...errors, city: '' });
    }
  };
  
  const validateAddress = (address) => {
    if (!/^[\p{L}\d\s.,;()']+$/u.test(address)) {
      setErrors({ ...errors, address: 'Dirección inválida' });
    } else {
      setErrors({ ...errors, address: '' });
    }
  };
  
  const validateCountry = (country) => {
    if (!/^[\p{L}\s.,;()']+$/u.test(country)) {
      setErrors({ ...errors, country: 'País inválido' });
    } else {
      setErrors({ ...errors, country: '' });
    }
  };
  
  const validatePhoneNumber = (phoneNumber) => {
    if (!/^[\d\-()\s]+$/.test(phoneNumber)) {
      setErrors({ ...errors, phoneNumber: 'Número de teléfono inválido' });
    } else {
      setErrors({ ...errors, phoneNumber: '' });
    }
  };
  
  

  const validateImage = (image) => {
    if (!/^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w].*))(.jpg|.JPG|.gif|.GIF|.png|.PNG|.jpeg|.JPEG)$/.test(image)) {
      setErrors({ ...errors, image: 'Formato inválido' });
    } else {
      setErrors({ ...errors, image: '' });
    }
  };

  function isFormValid() {
    return (
      errors.name === '' &&
      errors.description === '' &&
      errors.city === '' &&
      errors.country === '' &&
      errors.adress === '' &&
      errors.phoneNumber === '' &&
      errors.capacity === '' &&
      errors.image === '' 
    );
  }

  return (
    <>
      <Box display="flex" justifyContent="flex-start" mb={2}>
        <Box mr={2} mt={2} mb={2}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Volver</Button>
          </Link>
        </Box>
      </Box>
      <Container className='boxForm' maxWidth="sm">
        <Box display="flex" flexDirection="column" >
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Nombre"
                variant="outlined"
                name="name"
                value={restorants.name}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Name...(al menos 3 caracteres)"
                error={errors.name !== ""}
                helperText={errors.name !== "" ? errors.name : ""}
              />
              <TextField
                label="Ciudad"
                variant="outlined"
                name="city"
                value={restorants.city}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Ciudad..."
                error={errors.city !== ""}
                helperText={errors.city !== "" ? errors.city : ""}
              />
              <TextField
                label="Pais"
                variant="outlined"
                name="country"
                value={restorants.country}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Pais..."
                error={errors.country !== ""}
                helperText={errors.country !== "" ? errors.country : ""}
              />
              <TextField
                label="Direccion"
                variant="outlined"
                name="adress"
                value={restorants.adress}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Direccion..."
                error={errors.adress !== ""}
                helperText={errors.adress !== "" ? errors.adress : ""}
              />
              <TextField
                label="Numero de Telefono"
                variant="outlined"
                name="phoneNumber"
                value={restorants.phoneNumber}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Telefono..."
                error={errors.phoneNumber !== ""}
                helperText={errors.phoneNumber !== "" ? errors.phoneNumber : ""}
              />
              <TextField
                label="Descripcion"
                variant="outlined"
                name="description"
                value={restorants.description}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Description...(al menos 20 caracteres)"
                multiline
                rows={4}
                error={errors.description !== ""}
                helperText={errors.description !== "" ? errors.description : ""}
              />
              <TextField
                label="Capacidad"
                variant="outlined"
                name="capacity"
                value={restorants.capacity}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Capacidad..."
                error={errors.capacity !== ""}
                helperText={errors.capacity !== "" ? errors.capacity : ""}
              />
              <TextField
                label="Tags"
                variant="outlined"
                name="tags"
                placeholder="Tags..."
                autoComplete="off"
                inputRef={tagsInputRef}
                onChange={handleChange}
                type="text"
              />
              <div>
                {
                  restorants.tags.map((tag, index) => (<span key={index}>{tag + ', '}</span>))
                }
              </div>
              <Button
                variant="contained"
                onClick={handleTags}
                className={styles.add}
              >
                Agregar
              </Button>
              <TextField
                label="Image"
                variant="outlined"
                name="image"
                value={restorants.image}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Image..."
                type="file"
                error={errors.image !== ""}
                helperText={errors.image !== "" ? errors.image : ""}
              />
              <Box mr={2} mt={2} mb={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isFormValid()}
                >
                  Create
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
}