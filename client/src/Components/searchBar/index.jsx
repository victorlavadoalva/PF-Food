// import React from "react";
// import { useState } from "react";
// import { RESTOS } from "../../dataHardcodeo/constants";


// function SearchBar(props) {
//   const [searchResto, setSearchResto] = useState("");

//   function handleChange(event) {
//     event.preventDefault();
//     setSearchResto(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     function getByName(name) {
//       // Realizar la búsqueda por nombre en RESTOS
//       const results = RESTOS.filter(
//         (resto) =>
//           resto.name.toLowerCase().includes(name.toLowerCase())
//       );
//       // Actualizar los resultados de búsqueda en el estado del componente padre
//       props.setSearchResults(results);
//     }
//     getByName(searchResto);
//   }

//   return (
//     <form className='searchbar' onSubmit={handleSubmit}>
//       <label>
//         Buscar:
//         <input
//           type="text"
//           value={searchResto}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Buscar</button>
//     </form>
//   );
// }

// export default SearchBar;

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
      <label>
        Buscar:
        <input type="text" value={searchResto} onChange={handleChange} />
      </label>
      <button type="submit">Buscar</button>
      {searchError && <p>No se encontró ningún restaurante con ese nombre.</p>}
    </form>
  );
}

export default SearchBar;