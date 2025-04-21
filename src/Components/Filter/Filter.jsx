import { useState } from "react";

import FontLight from "../Font/Light/FontLight";
import Styles from "./Filter.module.css";
import Select from "../Select/Select";
import Button from "../Button/Button";

export default function Filter() {
    const [filter, setFilter] = useState({
        year: "",
        genre: "",
        rating: "",
        classification: "",
    });

    const handleFilterChange = (e) => {
        console.log(e.target.value);
    }


  return (
    <div className={Styles.filter}>
      <div className={Styles.selectsContainer}>
        <FontLight text="Buscar por" />
        <div className={Styles.selects}>
          {/*<Select
            handleFilterChange={handleFilterChange}
            title={"Año"}
            options={["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"]}
          />*/}
          <Select
            title={"Genero"}
            options={[
              "Acción",
              "Aventura",
              "Comedia",
              "Drama",
              "Terror",
              "Ciencia Ficción",
            ]}
          />
          {/*<Select title={"Rating"} options={["1", "2", "3", "4", "5"]} />*/}
        </div>
        {/*<div className={Styles.selectsContainer}>
          <Button title={"Aplicar Filtros"} type ="submit" onClick={() => {}}/>
          <Button title={"Borrar Filtros"} type = "delete" onClick={() => {}}/>
        </div>*/}
      </div>
      

      <div className={Styles.searchContainer}>
        <FontLight text="Buscar" />
        <input
          type="text"
          name="name"
          id="name"
          className={`background ${Styles.inputSearch}`}
        />
      </div>

      <div className={Styles.order}>
        <FontLight text="Ordenar" />
        <Select
            title={"A-Z"}
            options={[
              "Z-A",
              "Año ↑",
              "Año ↓",
              "Rating ↑",
              "Rating ↓",
            ]}
          />
      </div>
    </div>
  );
}
