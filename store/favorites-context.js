import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useReducer } from "react";

export const FavoritesContext = createContext({
  ids: [],
  setFavorites: (ids) => {},
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function favoritesReducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      const addedId = [...state, action.payload];
      AsyncStorage.setItem("favorites", addedId.toString());
      return addedId;
    case "REMOVE":
      const removedId = state.filter((catId) => catId !== action.payload);
      AsyncStorage.setItem("favorites", removedId.toString());
      return removedId;
    default:
      return state;
  }
}

function FavoritesContextProvider({ children }) {
  const [faveCatsState, dispatch] = useReducer(favoritesReducer, []);

  function setFavorites(ids) {
    dispatch({ type: "SET", payload: ids });
  }

  function addFavorite(id) {
    dispatch({ type: "ADD", payload: id });
  }

  function removeFavorite(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  const value = {
    ids: faveCatsState,
    setFavorites: setFavorites,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
