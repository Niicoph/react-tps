import { useEffect, useState } from "react";
import React from "react";
import MovieContainer from "../../Components/MediaContainer/MediaContainer";
import Content from "../../Components/Content/Content";
import Styles from "./Vistas.module.css";

export default function Vistas({filter}) {
  const [vistasGuardadas, setVistasGuardadas] = useState([]);

  useEffect(() => {
    const vistas = JSON.parse(localStorage.getItem("media")) || [];
    setVistasGuardadas(vistas);
  }, []);

  useEffect(() => {
    localStorage.setItem("media", JSON.stringify(vistasGuardadas));
  }, [vistasGuardadas]);

  const vistasValidas = vistasGuardadas.filter((vista) => vista.rating > 0);

  const handleVista = (id) => {
    const actualizadas = vistasGuardadas.map((vista) =>
      vista.id === id ? { ...vista, rating: 0 } : vista
    );
    setVistasGuardadas(actualizadas);
  };

  const filteredMedia = vistasValidas
    .filter((media) => {
      if (filter.genero && media.genero !== filter.genero) {
        return false;
      }
      if (filter.tipo && media.tipo !== filter.tipo) {
        return false;
      }
      if (
        filter.nombre &&
        !media.titulo.toLowerCase().includes(filter.nombre.toLowerCase())
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
          <p className="paragraph">No hay películas vistas</p>
        </div>
      ) : (
        filteredMedia.map((vista) => (
          <MovieContainer key={vista.id}>
            <Content {...vista} handleVista={handleVista} />
          </MovieContainer>
        ))
      )}
    </>
  );
}
