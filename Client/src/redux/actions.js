export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const REMOVE_PERSONAJE = "REMOVE_PERSONAJE";

export const removePersonaje = (id) => {
    return {type: REMOVE_PERSONAJE, payload: id,}
};

export const addFav = (character) => {
    return { type: ADD_FAV, payload: character}
};

export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id}
};