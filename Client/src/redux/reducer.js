import { ADD_FAV, REMOVE_FAV, REMOVE_PERSONAJE} from './actions';



const initialState = {
  myFavorites: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
        return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload]
        };
        case REMOVE_FAV:
            return {
              ...state,
              myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload) 
        };
        case REMOVE_PERSONAJE:
          return {
            ...state,
            myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload)
          };

          
        default:
        return {...state};
     }
    }

    export default reducer;