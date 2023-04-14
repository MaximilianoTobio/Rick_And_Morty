import React from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav, removePersonaje } from "../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Card.module.css";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  showCloseButton = true,
  addFav,
  removeFav,
  myFavorites,
  removePersonaje,
}) {
  const handleRemove = (id) => {
    onClose(id);
    removePersonaje(id);
  };
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      removeFav(id);
      setIsFav(false);
    } else {
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
      });
      setIsFav(true);
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.face + " " + styles.front}>
          <img src={image} alt="" />
          <h3>{name}</h3>
        </div>
        <div className={styles.face + " " + styles.back}>
          <div className={styles.buttons}>
          <div className={styles.close}>
          {showCloseButton && (
            <button onClick={() => handleRemove(id)}>❌</button>
          )}
          </div>
          <div className={styles.fav}>
            {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
          </div>
          </div>
        
          <h3>{name}</h3>
          <p>{species}</p>
          <p>{gender}</p>
          <div className={styles.link}>
            <Link to={`/detail/${id}`}>Quieres conocer más?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
    removePersonaje: (id) => dispatch(removePersonaje(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
