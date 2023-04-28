import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";
import  styles from "./Favorites.module.css";




export function Favorites({ myFavorites }) {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

   const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);

  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };



  return (
    <div>
      <div>
      <select onChange={handleOrder} className={styles}>
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
      <option value="Male" className={styles}>Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">Unknown</option>
      <option value="allCharacters">All Characters</option>
      </select>
      </div>

      <span></span>
      {myFavorites.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          showCloseButton={false}
        />
      ))}
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);
