import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
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
      <div className={styles.homeContent}>
        <Container ubicacion={ubicacion} />
      </div>
    </main>
  );
}
