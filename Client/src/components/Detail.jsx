import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const URL_BASE = 'http://localhost:3001/rickandmorty';
  // const API_KEY = "2a5b6e80e805.066223a89f6c5f71a784";
  useEffect(() => {
    axios(`${URL_BASE}/character/${id}`).then((response) => {
      if (response.data.id) {
        setCharacter(response.data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <>
    
    <div className={style.container}>
      {character.name ? (
       <div className={style.image}>
       <img src={character.image} alt="img" className={style.img}/>
        <div className={style.character_details}>
          <div className={style.character_status}>
            <h4
              className={
                character.status === "Alive"
                  ? style.status_alive
                  : style.status_death
              }
            >
              {character.status}
            </h4>
            <span
              className={
                character.status === "Alive" ? style.alive : style.dead
              }
            ></span>
          </div>
          <h3 id="animated-h3">{character.name}</h3>

          <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name}</p>
        </div>
        // </div>
      ) : (
        <div className={style.custom_loader}></div>
      )}
    </div>
    </>
  );
};

export default Detail;
