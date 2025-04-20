import React from "react";
import { useEffect, useState } from "react";
import MovieContainer from "../../Components/MovieContainer/MovieContainer";
import Content from "../../Components/Content/Content";
import AddIcon from "../../assets/Icons/add.svg";
import Styles from "./Movies.module.css";
import Modal from "../../Components/Modal/Modal";

export default function Movies() {
  const [peliculasGuardadas, setPeliculasGuardadas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
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
    const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
    setPeliculasGuardadas(peliculas);
  }, []);

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculasGuardadas));
  }, [peliculasGuardadas]);

  const agregarPelicula = (e) => {
    e.preventDefault();
    const nuevaPelicula = {
      ...formData,
      id: Date.now(),
      rating: parseFloat(formData.rating),
      año: parseInt(formData.año),
    };
    setPeliculasGuardadas((prev) => [...prev, nuevaPelicula]);
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
    const peliculasActualizadas = peliculasGuardadas.filter(
      (pelicula) => pelicula.id !== id
    );
    setPeliculasGuardadas(peliculasActualizadas);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleVista = (id) => {
    const pelicula = peliculasGuardadas.find((p) => p.id === id);
    console.log(pelicula);
    if (pelicula) {
      setPeliculaSeleccionada(pelicula);
      setModalVistaOpen(true);
    }
  };
  const handleGuardarRating = () => {
    const actualizadas = peliculasGuardadas.map((p) =>
      p.id === peliculaSeleccionada.id
        ? { ...p, rating: parseFloat(nuevoRating) }
        : p
    );
    setPeliculasGuardadas(actualizadas);
    setModalVistaOpen(false);
    setPeliculaSeleccionada(null);
    setNuevoRating(0);
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

      {peliculasGuardadas.length === 0 ? (
        <div className={Styles.noMovies}>
          <p className="paragraph">No hay películas guardadas</p>
        </div>
      ) : (
        peliculasGuardadas.map((pelicula) => (
          <MovieContainer key={pelicula.id}>
            <Content
              {...pelicula}
              handleEliminar={handleEliminar}
              handleVista={handleVista}
            />
          </MovieContainer>
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
          <input
            name="genero"
            placeholder="Género"
            value={formData.genero}
            onChange={handleFormChange}
            required
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
        {peliculaSeleccionada && (
          <>
            <p>{peliculaSeleccionada.titulo}</p>
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
