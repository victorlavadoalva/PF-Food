import React, { useState } from "react";
// import styles from "./index.styles.css"
function SearchBar(props) {
  const [searchResto, setSearchResto] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchResto(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // dispatch(getByName(searchResto));
    // este getByName supone una funcion que me va a buscar por nombre
  }

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <label>
        Buscar:
        <input
          type="text"
          value={searchResto}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;