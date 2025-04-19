import { useEffect, useState } from 'react';
import styles from './Container.module.css';
import Filter from '../Filter/Filter';
import MovieContainer from '../MovieContainer/MovieContainer';
import AddIcon from '../../assets/Icons/add.svg';
import Content from '../Content/Content';
import Modal from '../Modal/Modal';

export default function Container() {
  const [peliculasGuardadas, setPeliculasGuardadas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    titulo: '',
    genero: '',
    director: '',
    año: '',
    rating: '',
    image_url: ''
  });

  useEffect(() => {
    const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
    setPeliculasGuardadas(peliculas);
  }, []);

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculasGuardadas));
  }, [peliculasGuardadas]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      titulo: '',
      genero: '',
      tipo: '',
      director: '',
      año: '',
      rating: '',
      image_url: ''
    });
  };

  return (
    <div className={styles.container}>
      <Filter />
      <div className={styles.contentContainer}>
        <MovieContainer>
          <img
            src={AddIcon}
            alt="add"
            className={styles.addMovie}
            onClick={() => setModalOpen(true)}
          />
        </MovieContainer>

        {peliculasGuardadas.map((pelicula) => (
          <MovieContainer key={pelicula.id}>
            <Content {...pelicula} />
          </MovieContainer>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Agregar Película</h2>
        <form onSubmit={agregarPelicula} className={styles.form}>
          <input name="titulo" placeholder="Título" value={formData.titulo} onChange={handleFormChange} required />
          <input name="genero" placeholder="Género" value={formData.genero} onChange={handleFormChange} required />
          <input name="director" placeholder="Director" value={formData.director} onChange={handleFormChange} required />
          <input name="año" placeholder="Año" type="number" value={formData.año} onChange={handleFormChange} required />
          <input name="rating" placeholder="Rating" type="number" step="0.1" value={formData.rating} onChange={handleFormChange} required />
          <input name="image_url" placeholder="URL de imagen" value={formData.image_url} onChange={handleFormChange} required />
          <button type="submit">Guardar</button>
        </form>
      </Modal>
    </div>
  );
}
