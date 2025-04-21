import { useEffect, useState } from "react";
import React from "react";
import MovieContainer from "../../Components/MediaContainer/MediaContainer";
import Content from "../../Components/Content/Content";
import Styles from "./Vistas.module.css";

export default function Vistas() {
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

  return (
    <>
      {vistasValidas.length === 0 ? (
        <div className={Styles.noMovies}>
          <p className="paragraph">No hay películas vistas</p>
        </div>
      ) : (
        vistasValidas.map((vista) => (
          <MovieContainer key={vista.id}>
            <Content {...vista} handleVista={handleVista} />
          </MovieContainer>
        ))
      )}
    </>
  );
}
