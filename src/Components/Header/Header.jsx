import Styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import FontBold from "../Font/Bold/FontBold";

export default function Header({ handleUbicacionChange }) {
  const ubicaciones = ["Catalogo", "Pendientes", "Vistas"];

  return (
    <header className={Styles.header}>
      <div className={Styles.headerContent}>
        <img src={Logo} alt="logo" className={Styles.logo} />
        <ul className={Styles.headerList}>
          {ubicaciones.map((ubicacion) => (
            <li
              key={ubicacion}
              className={Styles.headerItem}
              // Si tiene onClick deberia ser un boton. Semanticamente un li no tiene que tener onclick
              onClick={() => handleUbicacionChange(ubicacion)} 
            >
              <FontBold text={ubicacion} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
