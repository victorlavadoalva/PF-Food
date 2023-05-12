export default function validation({ name, description, image, tags, capacity, ubi }) {
    var errors = {
        name: "",
        description: "",
        image: "",
        ubi: "",
        type_customer: "Restaurant",
        tags: [],
        capacity: ""
    }

    if (!name) {
        errors.image = "Necesitas un nombre"
    }
    if (!image) {
        errors.image = "Necesitas una imagen"
    }
    if (!capacity) {
        errors.capacity = "Ingrese la capacidad de comensales"
    }
    if (!ubi) {
        errors.ubi = "Ncesitas colocar una ubicacion"
    }
    if (!tags.length) {
        errors.tags = "Coloca al menos una etiqueta"
    }
    if (!description) {
        errors.description = "Necesitas una breve descripcion";
    }
    if (name.length < 3) {
        errors.name = "Nombre inválido";
    }
    if (description.length < 10) {
        errors.description = "La descripcion debe tener al menos 10 caracteres"
    }

    return errors
}

