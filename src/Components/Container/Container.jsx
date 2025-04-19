import styles from './Container.module.css';
import FontLight from '../Font/Light/FontLight';
import Filter from '../Filter/Filter';

export default function Container() {
  // logica de filtro
  // logica de busqueda

  return (
    <div className={styles.container}>
        <Filter />
        {/* Main Container */}
        {/* <div className={styles.contentContainer}></div> */}
    </div>
  );
}
