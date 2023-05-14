import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import {Link } from 'react-router-dom';
import { TextField, Box, Button, Container } from "@mui/material";
import { useRef } from "react";

export default function Form() {
    const [restorants, setRestorants] = useState({
        name: "",
        description: "",
        image: "",
        ubi: "",
        type_customer: "Restaurant",
        tags: [],
        capacity: ""
    });

    const [errors, setErrors] = useState({
        name: 'Campo Requerido',
        ubi: '',
        description: '',
        capacity: '',
        image: '',
      });

    function handleSubmit(event) {
        event.preventDefault();
        if (restorants.name && restorants.ubi && restorants.description && restorants.capacity){
            axios.post("https://pf-backend-production-5a61.up.railway.app/restaurants", restorants)
            setErrors({});
            setRestorants({
                name: "",
                description: "",
                image: "",
                ubi: "",
                type_customer: "Restaurant",
                tags: [],
                capacity: ""
            });
            alert('Restaurante creado')
        }else{
            alert('Información incompleta');
        }
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
        tagsInputRef.current.value = "";
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
            case 'ubi':
              validateUbi(value);
              break;
            case 'capacity':
              validateCapacity(value);
              break;
            case 'image':
              validateImage(value);
              break;
            default:
              break;
          }

    };

    const validateName = (name) => {
        if (!/^[a-zA-Z\s.,]+$/.test(name)) {
          setErrors({ ...errors, name: 'Formato inválido' });
        } else {
          setErrors({ ...errors, name: '' });
        }
      };
      
      const validateDescription = (description) => {
        if (!/^[a-zA-Z0-9\s.,]+$/.test(description)) {
          setErrors({ ...errors, description: 'Formato inválido' });
        } else {
          setErrors({ ...errors, description: '' });
        }
      };
      
      const validateUbi = (ubi) => {
        if (!/^[a-zA-Z0-9\s.,]+$/.test(ubi)) {
          setErrors({ ...errors, ubi: 'Formato inválido' });
        } else {
          setErrors({ ...errors, ubi: '' });
        }
      };
      
      const validateCapacity = (capacity) => {
        if (!/^[a-zA-Z0-9\s]+$/.test(capacity)) {
          setErrors({ ...errors, capacity: 'Formato inválido' });
        } else {
          setErrors({ ...errors, capacity: '' });
        }
      };
      
      const validateImage = (image) => {
        if (!/^[a-zA-Z0-9\s]+$/.test(image)) {
          setErrors({ ...errors, image: 'Formato inválido' });
        } else {
          setErrors({ ...errors, image: '' });
        }
      };
      
      function isFormValid() {
        return (
          errors.name === '' &&
          errors.description === '' &&
          errors.ubi === '' &&
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
              label="Name"
              variant="outlined"
              name="name"
              value={restorants.name}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Name..."
              error={errors.name !== ""}
              helperText={errors.name !== "" ? errors.name : ""}
            />
            <TextField
              label="Ubicacion"
              variant="outlined"
              name="ubi"
              value={restorants.ubi}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Ubicacion..."
              error={errors.ubi !== ""}
              helperText={errors.ubi !== "" ? errors.ubi : ""}
            />
            <TextField
              label="Description"
              variant="outlined"
              name="description"
              value={restorants.description}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Description..."
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
              error={errors.tags !== ""}
              helperText={errors.tags !== "" ? errors.tags : ""}
            />
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
              type="url"
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