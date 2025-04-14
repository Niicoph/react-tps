import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import FontBold from "../Font/Bold/FontBold";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <ul className={styles.headerList}>
          <FontBold text={"Peliculas "} />
          <FontBold text={"Series "} />
          <FontBold text={"Vistas "} />
          <FontBold text={"Pendientes "} />
        </ul>
      </div>
    </header>
  );
}
