import React, { useEffect, useState } from "react";
import MovieContainer from "../../Components/MediaContainer/MediaContainer";
import Content from "../../Components/Content/Content";
import Styles from "./Pendientes.module.css";
import Modal from "../../Components/Modal/Modal";

export default function Pendientes({filter}) {
  const [pendientesGuardadas, setPendientesGuardadas] = useState([]);
  const [mediaSelected, setMediaSelected] = useState(null);
  const [modalVistaOpen, setModalVistaOpen] = useState(false);
  const [nuevoRating, setNuevoRating] = useState("");

  useEffect(() => {
    const pendientes = JSON.parse(localStorage.getItem("media")) || [];
    setPendientesGuardadas(pendientes);
  }, []);

  useEffect(() => {
    localStorage.setItem("media", JSON.stringify(pendientesGuardadas));
  }, [pendientesGuardadas]);

  const pendientesValidas = pendientesGuardadas.filter(
    (p) => p.pendiente === true && p.rating === 0
  );

  const handlePendiente = (id) => {
    const updatedPendientes = pendientesGuardadas.map((p) =>
      p.id === id ? { ...p, pendiente: !p.pendiente } : p
    );
    setPendientesGuardadas(updatedPendientes);
  };

  const handleVista = (id) => {
    const media = pendientesGuardadas.find((p) => p.id === id);
    if (media) {
      setMediaSelected(media);
      setModalVistaOpen(true);
    }
  };

  const handleGuardarRating = () => {
    const actualizadas = pendientesGuardadas.map((p) =>
      p.id === mediaSelected.id
        ? {
            ...p,
            rating: parseFloat(nuevoRating),
            pendiente: false, // Cambia a false al guardar el rating
          }
        : p
    );
    setPendientesGuardadas(actualizadas);
    setModalVistaOpen(false);
    setMediaSelected(null);
    setNuevoRating("");
  };

  const filteredMedia = pendientesValidas
    .filter((media) => {
      if (filter.genero && media.genero !== filter.genero) {
        return false;
      }
      if (
        filter.name &&
        !media.titulo.toLowerCase().includes(filter.name.toLowerCase())
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      switch (filter.order) {
        case "A-Z":
          return a.titulo.localeCompare(b.titulo);
        case "Z-A":
          return b.titulo.localeCompare(a.titulo);
        case "Año ↑":
          return a.año - b.año;
        case "Año ↓":
          return b.año - a.año;
        case "Rating ↑":
          return a.rating - b.rating;
        case "Rating ↓":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <>
      {filteredMedia.length === 0 ? (
        <div className={Styles.noMovies}>
          <p className="paragraph">No hay películas pendientes</p>
        </div>
      ) : (
        filteredMedia.map((pendiente) => (
          <MovieContainer key={pendiente.id}>
            <Content
              {...pendiente}
              handlePendiente={handlePendiente}
              handleVista={handleVista}
            />
          </MovieContainer>
        ))
      )}

      <Modal isOpen={modalVistaOpen} onClose={() => setModalVistaOpen(false)}>
        <h2>Calificar</h2>
        {mediaSelected && (
          <>
            <p>{mediaSelected.titulo}</p>
            <form
              className={Styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                handleGuardarRating();
              }}
            >
              <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                name="rating"
                placeholder="Nuevo Rating"
                value={nuevoRating}
                onChange={(e) => setNuevoRating(e.target.value)}
                required
              />
              <button type="submit">Guardar</button>
            </form>
          </>
        )}
      </Modal>
    </>
  );
}
