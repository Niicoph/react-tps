import FontLight from "../Font/Light/FontLight";
import Styles from "./Filter.module.css";
import Select from "../Select/Select";

export default function Filter({ handleFilterChange , filter }) {
  return (
    <div className={Styles.filter}>
      <div className={Styles.selectsContainer}>
        <FontLight text="Buscar por" />
        <div className={Styles.selects}>
          <Select
            title={"- Género -"}
            name="genero"
            value={filter.genero}
            onChange={handleFilterChange}
            options={[
              "Acción",
              "Aventura",
              "Comedia",
              "Ciencia Ficción",
              "Crimen",
              "Deporte",
              "Documental",
              "Drama",
              "Terror",
              "Western",
            ]}
          />
          <Select
            title={"- Tipo -"}
            name="tipo"
            value={filter.tipo}
            onChange={handleFilterChange}
            options={[
              "Película",
              "Serie",
            ]}
          />
        </div>
      </div>

      <div className={Styles.searchContainer}>
        <FontLight text="Buscar" />
        <input
          onChange={handleFilterChange}
          type="text"
          name="nombre"
          id="name"
          value={filter.nombre}
          className={`background ${Styles.inputSearch}`}
        />
      </div>

      <div className={Styles.order}>
        <FontLight text="Ordenar" />
        <Select
          name="orden"
          value={filter.orden}
          onChange={handleFilterChange}
          title={"- Orden -"}
          options={["A-Z", "Z-A", "Año ↑", "Año ↓", "Rating ↑", "Rating ↓"]}
        />
      </div>
    </div>
  );
}
