
import Styles from "./Container.module.css";
import Filter from "../Filter/Filter";
import Catalogo from '../../Pages/Catalogo/Catalogo';
import Vistas from "../../Pages/Vistas/Vistas";
import Pendientes from "../../Pages/Pendientes/Pendientes";

export default function Container({ ubicacion }) {
  return (
    <div className={Styles.container}>
      <Filter />
      <div className={Styles.contentContainer}>
        {ubicacion === "Catalogo" ? <Catalogo /> : ubicacion === "Pendientes" ? <Pendientes/> : ubicacion === "Vistas" ? <Vistas/> : null}
      </div>
    </div>
  );
}
