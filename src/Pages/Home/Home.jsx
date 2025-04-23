import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Title from "../../Components/Title/Title";
import styles from "./Home.module.css";

export default function Home() {
  const [ubicacion, setUbicacion] = useState("Catalogo");

  const handleUbicacionChange = (nuevaUbicacion) => {
    setUbicacion(nuevaUbicacion);
    localStorage.setItem("ubicacion", nuevaUbicacion);
  };

  return (
    <main className={styles.home}>
      <Header handleUbicacionChange={handleUbicacionChange} />
      <Title text='Registra las películas que has visto. <br>
        Guarda las que quieras ver. <br> 
        Cuéntales a tus amigos qué es lo mejor.'/>
      <div className={styles.homeContent}>
        <Container ubicacion={ubicacion} />
      </div>
    </main>
  );
}
