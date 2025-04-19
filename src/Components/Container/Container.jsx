
import styles from "./Container.module.css";
import Filter from "../Filter/Filter";
import Movies from '../../Pages/Movies/Movies';
import Series from '../../Pages/Series/Series';

export default function Container({ ubicacion }) {
  return (
    <div className={styles.container}>
      <Filter />
      <div className={styles.contentContainer}>
        {ubicacion === "Peliculas" ? <Movies /> : ubicacion === "Series" ? <Series /> : null}
      </div>
    </div>
  );
}
