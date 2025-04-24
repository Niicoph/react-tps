import React from "react";
import styles from "./MediaContent.module.css";
import SeenIcon from "../../assets/Icons/seen.svg";
import NoSeenIcon from "../../assets/Icons/noseen.svg";
import DeleteIcon from "../../assets/Icons/delete.svg";
import WatchlistIcon from "../../assets/Icons/pending.svg";
import NoWatchListIcon from "../../assets/Icons/noPending.svg";
import MediaIconButton from "../MediaIconButton/MediaIconButton";

export default function MediaContent({
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
  ubicacion,
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
        <MediaIconButton
          src={rating ? NoSeenIcon : SeenIcon}
          alt="Marcar como vista"
          title="Marcar como vista"
          onClick={() => handleVista(id)}
        />
        {/* Usar siempre === para comparaciones */}
        {(ubicacion == "Catalogo")?
          <MediaIconButton
          src={DeleteIcon}
          alt="Eliminar"
          title="Eliminar"
          onClick={() => handleEliminar(id)}
          /> : null}
        {/* Usar siempre === para comparaciones */}

        {(ubicacion == "Catalogo" || ubicacion == "Pendientes")?
          <MediaIconButton 
          src={pendiente ? NoWatchListIcon : WatchlistIcon} 
          alt="Agregar a pendientes"
          title="Agregar a lista de pendientes"
          onClick={() => handlePendiente(id)}
          />: null}
      </div>
    </div>
  );
}
