import { connect } from "react-redux";
import Card from "./Card";


export function Favorites({ myFavorites }) {
  return (
    <div>
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
