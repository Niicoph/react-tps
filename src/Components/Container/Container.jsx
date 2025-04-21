import { useState } from "react";
import Styles from "./Container.module.css";
import Filter from "../Filter/Filter";
import Catalogo from "../../Pages/Catalogo/Catalogo";
import Vistas from "../../Pages/Vistas/Vistas";
import Pendientes from "../../Pages/Pendientes/Pendientes";

export default function Container({ ubicacion }) {
  const [filter, setFilter] = useState({
    genero: "",
    order: "",
    nombre : "",
    tipo: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={Styles.container}>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <div className={Styles.contentContainer}>
        {ubicacion === "Catalogo" ? (
          <Catalogo filter={filter} />
        ) : ubicacion === "Pendientes" ? (
          <Pendientes filter={filter} />
        ) : ubicacion === "Vistas" ? (
          <Vistas filter={filter} />
        ) : null}
      </div>
    </div>
  );
}
