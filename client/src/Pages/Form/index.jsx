import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

export default function Form() {
    const [restorants, setRestorants] = useState({
        name: "",
        description: "",
        image: "",
        ubi: "",
        type_customer: "Restaurant",
        tags: [],
        capacidad: ""
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
        if (restorants.name && restorants.ubi && restorants.description && restorants.capacity && restorants.image){
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
        }else{
            alert('Información incompleta');
        }
    };

    function handleTags(event) {
        event.preventDefault();
        setRestorants({
            ...restorants,
            tags: [...restorants.tags, event.target.value]
        })
        event.target.value = ""
    }

    function handleChange(e) {
        e.preventDefault();
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
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                
                <label>Name:</label>
                <input autoComplete="off" name="name" value={restorants.name} onChange={handleChange} placeholder="name..." type="text" />
                {errors.name !== "" && <p className={styles.danger}>{errors.name}</p>}
                <br/>

                <label>Image</label>
                <input autoComplete="off" name="image" value={restorants.image} onChange={handleChange} placeholder="Subir imagen..." type="file" />
                {errors.image !== "" && <p className={styles.danger}>{errors.image}</p>}
                <br/>

                <label>Description</label>
                <textarea autoComplete="off" name="description" value={restorants.description} onChange={handleChange} placeholder="description..." type="" />
                {errors.description !== "" && <p className={styles.danger}>{errors.description}</p>}
                <br/>

                <label>Tags</label>
                <input autoComplete="off" name="tags" placeholder="tags..." type="text" />
                {errors.tags !== "" && <p className={styles.danger}>{errors.tags}</p>}
                <button onClick={handleTags} className={styles.add}>Agregar</button>
                <br/>

                <label>Ubicacion</label>
                <input autoComplete="off" name="ubi" value={restorants.ubi} onChange={handleChange} placeholder="Ubicacion..." type="text" />
                {errors.ubi !== "" && <p className={styles.danger}>{errors.ubi}</p>}
                <br/>

                <label>Capacidad</label>
                <input autoComplete="off" name="capacity" value={restorants.capacity} onChange={handleChange} placeholder="Capacidad..." type="" />
                {errors.capacity !== "" && <p className={styles.danger}>{errors.capacity}</p>}
                <button className={styles.createButton} type="submit" disabled={!isFormValid()}>Create</button>
            </form>
        </div>
    )
}