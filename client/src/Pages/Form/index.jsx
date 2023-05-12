import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import validation from "./validation";

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

    const [errors, setErrros] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("https://pf-backend-production-5a61.up.railway.app/restaurants", restorants)
        setErrros({});
        setRestorants({
            name: "",
            description: "",
            image: "",
            ubi: "",
            type_customer: "Restaurant",
            tags: [],
            capacity: ""
        });
    };

    function handleTags(event) {
        event.preventDefault();
        setRestorants({
            ...restorants,
            tags: [...restorants.tags, event.target.form.tags.value]
        })
        event.target.form.tags.value = ""
    }

    function handleChange(event) {
        if (event.target.name !== "tags") {
            setRestorants({
                ...restorants,
                [event.target.name]: event.target.value
            })
        };
        setErrros(
            validation({
                ...restorants,
                [event.target.name]: event.target.value
            })
        );
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                
                <label>Name:</label>
                <input autoComplete="off" name="name" value={restorants.name} onChange={handleChange} placeholder="name..." type="text" />
                {errors.name !== "" && <p className={styles.danger}>{errors.name}</p>}

                <label>Image</label>
                <input autoComplete="off" name="image" value={restorants.image} onChange={handleChange} placeholder="image..." type="URL image..." />
                {errors.image !== "" && <p className={styles.danger}>{errors.image}</p>}

                <label>Description</label>
                <textarea autoComplete="off" name="description" value={restorants.description} onChange={handleChange} placeholder="description..." type="" />
                {errors.description !== "" && <p className={styles.danger}>{errors.description}</p>}

                <label>Tags</label>
                <input autoComplete="off" name="tags" placeholder="tags..." type="text" />
                {errors.tags !== "" && <p className={styles.danger}>{errors.tags}</p>}
                <button onClick={handleTags} className={styles.add}>Agregar</button>

                <label>Ubicacion</label>
                <input autoComplete="off" name="ubi" value={restorants.ubi} onChange={handleChange} placeholder="Ubicacion..." type="text" />
                {errors.ubi !== "" && <p className={styles.danger}>{errors.ubi}</p>}

                <label>Capacidad</label>
                <input autoComplete="off" name="capacity" value={restorants.capacity} onChange={handleChange} placeholder="Capacidad..." type="" />
                {errors.capacity !== "" && <p className={styles.danger}>{errors.capacity}</p>}

                <button className={styles.createButton} type="submit">Create</button>
                
            </form>
        </div>
    )
}