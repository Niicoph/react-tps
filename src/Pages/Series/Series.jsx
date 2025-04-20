import React, { useState, useEffect } from "react";
import MovieContainer from "../../Components/MovieContainer/MovieContainer";
import AddIcon from "../../assets/Icons/add.svg";
import Styles from "./Series.module.css";
import Modal from "../../Components/Modal/Modal";
import Content from "../../Components/Content/Content";

export default function Series() {
  const [seriesGuardadas, setSeriesGuardadas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    genero: "",
    director: "",
    año: "",
    rating: "",
    image_url: "",
  });

  useEffect(() => {
    const series = JSON.parse(localStorage.getItem("series")) || [];
    setSeriesGuardadas(series);
  }, []);

  useEffect(() => {
    localStorage.setItem("series", JSON.stringify(seriesGuardadas));
  }, [seriesGuardadas]);

  const agregarSerie = (e) => {
    e.preventDefault();
    const nuevaSerie = {
      ...formData,
      id: Date.now(),
      tipo: "Serie",
      rating: parseFloat(formData.rating),
      año: parseInt(formData.año),
    };
    setSeriesGuardadas((prev) => [...prev, nuevaSerie]);
    setModalOpen(false);
    setFormData({
      titulo: "",
      genero: "",
      tipo: "Serie",
      director: "",
      año: "",
      rating: "",
      image_url: "",
    });
  };

  const handleEliminar = (id) => {
    const seriesActualizadas = seriesGuardadas.filter(
      (serie) => serie.id !== id
    );
    setSeriesGuardadas(seriesActualizadas);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <MovieContainer>
        <img
          src={AddIcon}
          alt="add"
          className={Styles.addMovie}
          onClick={() => setModalOpen(true)}
        />
      </MovieContainer>

      {seriesGuardadas.length === 0 ? (
        <div className={Styles.noSeries}>
          <p className="paragraph">No hay series guardadas</p>
        </div>
      ) : (
        seriesGuardadas.map((serie) => (
          <MovieContainer key={serie.id}>
            <Content {...serie} handleEliminar={handleEliminar} />
          </MovieContainer>
        ))
      )}

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <form onSubmit={agregarSerie} className={Styles.form}>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleFormChange}
            placeholder="Título"
            required
          />
          <input
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleFormChange}
            placeholder="Género"
            required
          />
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleFormChange}
            placeholder="Director"
            required
          />
          <input
            type="number"
            name="año"
            value={formData.año}
            onChange={handleFormChange}
            placeholder="Año"
            required
          />
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleFormChange}
            placeholder="Rating"
            step="0.1"
            required
          />
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleFormChange}
            placeholder="URL de la imagen"
            required
          />
          <button type="submit">Agregar Serie</button>
        </form>
      </Modal>
    </>
  );
}
