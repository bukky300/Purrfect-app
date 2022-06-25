import { createContext, useReducer } from "react";

export const CatsContext = createContext({
  catItems: [],
  setCatItems: (catItems) => {},
});

function catReducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload;
    default:
      return state;
  }
}

function CatsContextProvider({ children }) {
  const [catState, dispatch] = useReducer(catReducer, []);

  function setCatItems(catItems) {
    dispatch({ type: "SET", payload: catItems });
  }

  const value = {
    catItems: catState,
    setCatItems: setCatItems,
  };

  return <CatsContext.Provider value={value}>{children}</CatsContext.Provider>;
}

export default CatsContextProvider;
