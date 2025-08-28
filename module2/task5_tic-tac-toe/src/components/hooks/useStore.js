import { useState } from "react";

export const initialState = {
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  field: Array(9).fill(""),
};

export const useStore = () => {
  const [state, setState] = useState(initialState);

  const reset = () => setState(initialState);

  const updateState = (fieldName, newValue) => {
    if (typeof fieldName === "object") {
      setState((prev) => ({ ...prev, ...fieldName }));
    } else {
      setState((prev) => ({ ...prev, [fieldName]: newValue }));
    }
  };

  return {
    getState: () => state,
    updateState,
    reset,
  };
};
