import React from "react";
import { useEffect, useState } from "react";
import MediaContainer from "../../Components/MediaContainer/MediaContainer";
import Content from "../../Components/Content/Content";
import AddIcon from "../../assets/Icons/add.svg";
import Styles from "./Catalogo.module.css";
import Modal from "../../Components/Modal/Modal";
import PreMedia from "../../Utils/Media.json";
import Select from "../../Components/Select/Select";

export default function Catalogo({ filter }) {
  const [mediaSaved, setMediaSaved] = useState([]);
  const [mediaSelected, setMediaSelected] = useState(null);
  const [nuevoRating, setNuevoRating] = useState(0);
  const [modalVistaOpen, setModalVistaOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    genero: "",
    director: "",
    tipo: "",
    año: "",
    rating: 0,
    image_url: "",
    pendiente: false,
  });

  useEffect(() => {
    const media = localStorage.getItem("media");

    if (!media || media == "[]") {
      // Guardar el array en localStorage
      localStorage.setItem("media", JSON.stringify(PreMedia));
    }
  }, []);

  useEffect(() => {
    const media = JSON.parse(localStorage.getItem("media")) || [];
    setMediaSaved(media);
  }, []);

  useEffect(() => {
    localStorage.setItem("media", JSON.stringify(mediaSaved));
  }, [mediaSaved]);

  const agregarPelicula = (e) => {
    e.preventDefault();
    const nuevaPelicula = {
      ...formData,
      id: Date.now(),
      rating: parseFloat(formData.rating),
      año: parseInt(formData.año),
    };
    setMediaSaved((prev) => [...prev, nuevaPelicula]);
    setModalOpen(false);
    setFormData({
      titulo: "",
      genero: "",
      director: "",
      tipo: "",
      año: "",
      rating: 0,
      image_url: "",
      pendiente: false,
    });
  };

  const handleEliminar = (id) => {
    const mediaUpdated = mediaSaved.filter((media) => media.id != id);
    setMediaSaved(mediaUpdated);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleVista = (id) => {
    const media = mediaSaved.find((p) => p.id === id);
    if (media) {
      setMediaSelected(media);
      setModalVistaOpen(true);
    }
  };
  const handleGuardarRating = () => {
    const actualizadas = mediaSaved.map((p) =>
      p.id === mediaSelected.id ? { ...p, rating: parseFloat(nuevoRating) } : p
    );
    setMediaSaved(actualizadas);
    setModalVistaOpen(false);
    setMediaSelected(null);
    setNuevoRating(0);
  };
  const handlePendiente = (id) => {
    const media = mediaSaved.find((p) => p.id === id);
    if (media) {
      const mediaUpdated = { ...media, pendiente: !media.pendiente };
      const mediaUpdatedList = mediaSaved.map((p) =>
        p.id === id ? mediaUpdated : p
      );
      setMediaSaved(mediaUpdatedList);
    }
  };

  const filteredMedia = mediaSaved
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
      <MediaContainer>
        <img
          src={AddIcon}
          alt="add"
          className={Styles.addMovie}
          onClick={() => setModalOpen(true)}
        />
      </MediaContainer>

      {mediaSaved.length === 0 ? (
        <div className={Styles.noMovies}>
          <p className="paragraph">No hay medios guardados</p>
        </div>
      ) : (
        filteredMedia.map((media) => (
          <MediaContainer key={media.id}>
            <Content
              {...media}
              handleEliminar={handleEliminar}
              handleVista={handleVista}
              handlePendiente={handlePendiente}
            />
          </MediaContainer>
        ))
      )}

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Agregar Película</h2>
        <form onSubmit={agregarPelicula} className={Styles.form}>
          <input
            name="titulo"
            placeholder="Título"
            value={formData.titulo}
            onChange={handleFormChange}
            required
          />
          {/* <input
            name="genero"
            placeholder="Género"
            value={formData.genero}
            onChange={handleFormChange}
            required
          /> */}
          <Select
            name="genero"
            value={formData.genero}
            onChange={handleFormChange}
            title={"Género"}
            options={[
              "Acción",
              "Aventura",
              "Comedia",
              "Drama",
              "Terror",
              "Ciencia Ficción",
            ]}
          />
          <input
            name="director"
            placeholder="Director"
            value={formData.director}
            onChange={handleFormChange}
            required
          />
          <input
            name="año"
            placeholder="Año"
            type="number"
            value={formData.año}
            onChange={handleFormChange}
            required
          />
          <input
            name="image_url"
            placeholder="URL de imagen"
            value={formData.image_url}
            onChange={handleFormChange}
            required
          />
          <button type="submit">Guardar</button>
        </form>
      </Modal>
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
                step="1"
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
