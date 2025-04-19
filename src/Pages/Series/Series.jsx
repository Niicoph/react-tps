import React from "react";
import MovieContainer from "../../Components/MovieContainer/MovieContainer";
import AddIcon from "../../assets/Icons/add.svg";
import Styles from "./Series.module.css";

export default function Series() {
  return (
    <MovieContainer>
      <img
        src={AddIcon}
        alt="add"
        className={Styles.addMovie}
        // onClick={() => setModalOpen(true)}
      />
    </MovieContainer>
  );
}
