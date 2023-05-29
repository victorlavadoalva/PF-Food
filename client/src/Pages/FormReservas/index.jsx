import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addDays, format } from "date-fns";

import styles from "./styles.module.css";
import { Button, TextField, Typography } from "@mui/material";

const ReservasCliente = () => {
  const initialValues = {
    nombre: "",
    dia: "",
    hora: "",
    cantidadComensales: "",
    telefono: "",
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es requerido"),
    dia: Yup.date().required("El día es requerido"),
    hora: Yup.string().required("La hora es requerida"),
    cantidadComensales: Yup.number()
      .required("La cantidad de comensales es requerida")
      .positive("La cantidad de comensales debe ser un número positivo")
      .integer("La cantidad de comensales debe ser un número entero"),
    telefono: Yup.string()
      .required("El teléfono es requerido")
      .matches(/^\d+$/, "El teléfono debe contener solo números")
      .min(10, "El teléfono debe tener al menos 10 dígitos")
      .max(15, "El teléfono no debe exceder los 15 dígitos"),
  });

  const handleSubmit = (values) => {
    // Lógica de envío del formulario
    console.log(values);
  };

  const today = new Date();

  return (
    <div className={styles["reservation-form"]}>
      {/* <h2 className={styles["header"]}>Reservar en el restaurante</h2> */}
      <Typography variant="h6" align="center" fontWeight="bold">
        Realiza tu reserva
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles["form"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="nombre">Nombre:</label>
            <Field
              type="text"
              id="nombre"
              name="nombre"
              className={styles.input}
            />
            <ErrorMessage
              name="nombre"
              component="div"
              className={styles["error-message"]}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="dia">Día:</label>
            <Field
              type="date"
              id="dia"
              name="dia"
              min={format(addDays(today, 1), "yyyy-MM-dd")}
              className={styles.input}
            />
            <ErrorMessage
              name="dia"
              component="div"
              className={styles["error-message"]}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="hora">Hora:</label>
            <Field
              type="time"
              id="hora"
              name="hora"
              className={styles.input}
            />
            <ErrorMessage
              name="hora"
              component="div"
              className={styles["error-message"]}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="cantidadComensales">Cantidad de comensales:</label>
            <Field
              type="number"
              id="cantidadComensales"
              name="cantidadComensales"
              min={1}
              className={styles.input}
            />
            <ErrorMessage
              name="cantidadComensales"
              component="div"
              className={styles["error-message"]}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="telefono">Teléfono:</label>
            <Field
              type="tel"
              id="telefono"
              name="telefono"
              className={styles.input}
            />
            <ErrorMessage
              name="telefono"
              component="div"
              className={styles["error-message"]}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            sx={{ background: "#3A506B" }}
          >
            Reservar
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReservasCliente;
