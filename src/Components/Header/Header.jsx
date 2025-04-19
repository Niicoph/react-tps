import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import FontBold from "../Font/Bold/FontBold";

export default function Header({ handleUbicacionChange }) {
  const ubicaciones = ["Peliculas", "Series", "Vistas", "Pendientes"];

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <ul className={styles.headerList}>
          {ubicaciones.map((ubicacion) => (
            <li
              key={ubicacion}
              className={styles.headerItem}
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
