
import Styles from "./Container.module.css";
import Filter from "../Filter/Filter";
import Catalogo from '../../Pages/Catalogo/Catalogo';

export default function Container({ ubicacion }) {
  return (
    <div className={Styles.container}>
      <Filter />
      <div className={Styles.contentContainer}>
        {ubicacion === "Catalogo" ? <Catalogo /> : ubicacion === "Pendientes" ? null : ubicacion === "Vistas" ? null : null}
      </div>
    </div>
  );
}
