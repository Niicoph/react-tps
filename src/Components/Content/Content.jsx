import React , {useEffect} from 'react';
import styles from './Content.module.css';
import SeenIcon from '../../assets/Icons/seen.svg';
import DeleteIcon from '../../assets/Icons/delete.svg';
import WatchlistIcon from '../../assets/Icons/watchlist.svg';

export default function Content({ titulo, genero, tipo, director, año, rating, image_url, id , handleEliminar }) {

  const handleDelete = () => {
    if (tipo === "Pelicula") {
        const peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];
        const peliculasActualizadas = peliculasGuardadas.filter((pelicula) => pelicula.id !== id);
        localStorage.setItem("peliculas", JSON.stringify(peliculasActualizadas));
    } else if (tipo === "Serie") {
        const seriesGuardadas = JSON.parse(localStorage.getItem("series")) || [];
        const seriesActualizadas = seriesGuardadas.filter((serie) => serie.id !== id);
        localStorage.setItem("series", JSON.stringify(seriesActualizadas));
    }
    handleEliminar(id);
  }

  return (
    <div className={styles.content}>
      <div className={styles.posterWrapper}>
        <img src={image_url} alt={titulo} className={styles.poster} />
        <div className={styles.info}>
          <h2 className={styles.titulo}>{titulo}</h2>
          <p><strong>Género:</strong> {genero}</p>
          <p><strong>Tipo:</strong> {tipo}</p>
          <p><strong>Director:</strong> {director}</p>
          <p><strong>Año:</strong> {año}</p>
          <p><strong>Rating:</strong> ⭐ {rating}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <img src={SeenIcon} alt="Marcar como vista" title="Marcar como vista" />
        <img src={DeleteIcon} alt="Eliminar" title="Eliminar" onClick={handleDelete}/>
        <img src={WatchlistIcon} alt="Agregar a pendientes" title="Agregar a lista de pendientes" />
      </div>
    </div>
  );
}
