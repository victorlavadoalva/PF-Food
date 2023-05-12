import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RESTOS } from "../../dataHardcodeo/constants";

function SearchBar() {
  const [searchResto, setSearchResto] = useState("");
  const [searchError, setSearchError] = useState(false);
  const navigate = useNavigate();

  function handleChange(event) {
    setSearchResto(event.target.value);
    setSearchError(false); // Reiniciar el mensaje de error al cambiar el valor de búsqueda
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Realizar la búsqueda por nombre en la lista de restaurantes (RESTOS)
    const results = RESTOS.filter(
      (resto) =>
        resto.name.toLowerCase().includes(searchResto.toLowerCase())
    );

    if (results.length > 0) {
      const restoId = results[0].id;
      navigate(`/detail/${restoId}`);
    } else {
      setSearchError(true); // Mostrar mensaje de error si no se encuentra ningún resultado
    }
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
        <input type="text" value={searchResto} onChange={handleChange} />
      <button type="submit">Buscar</button>
      {searchError && <p>No se encontró ningún restaurante con ese nombre.</p>}
    </form>
  );
}

export default SearchBar;