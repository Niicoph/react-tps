import React from "react";
import styles from "./Content.module.css";
import SeenIcon from "../../assets/Icons/seen.svg";
import NoSeenIcon from "../../assets/Icons/noseen.svg";
import DeleteIcon from "../../assets/Icons/delete.svg";
import WatchlistIcon from "../../assets/Icons/pending.svg";
import NoWatchListIcon from "../../assets/Icons/nopending.svg";

export default function Content({
  titulo,
  genero,
  tipo,
  director,
  año,
  rating,
  image_url,
  id,
  pendiente,
  handleEliminar,
  handleVista,
  handlePendiente,
}) {
  return (
    <div className={styles.content}>
      <div className={styles.posterWrapper}>
        <img src={image_url} alt={titulo} className={styles.poster} />
        <div className={styles.info}>
          <h2 className={styles.titulo}>{titulo}</h2>
          <p>
            <strong>Tipo:</strong> {tipo}
          </p>
          <p>
            <strong>Género:</strong> {genero}
          </p>
          <p>
            <strong>Director:</strong> {director}
          </p>
          <p>
            <strong>Año:</strong> {año}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {rating}
          </p>
        </div>
      </div>

      <div className={styles.actions}>
        <img
          src={rating ? NoSeenIcon : SeenIcon}
          alt="Marcar como vista"
          title="Marcar como vista"
          onClick={() => handleVista(id)}
        />
        <img
          src={DeleteIcon}
          alt="Eliminar"
          title="Eliminar"
          onClick={() => handleEliminar(id)}
        />
        <img
          src={pendiente ? NoWatchListIcon : WatchlistIcon}
          alt="Agregar a pendientes"
          title="Agregar a lista de pendientes"
          onClick={() => handlePendiente(id)}
        />
      </div>
    </div>
  );
}
