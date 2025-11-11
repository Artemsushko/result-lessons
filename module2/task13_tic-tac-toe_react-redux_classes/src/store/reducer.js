import { initialState } from "./initialState";
import { checkWinner } from "../utils/checkWinner";
const MAKE_MOVE = "MAKE_MOVE";
const RESET_GAME = "RESET_GAME";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MAKE_MOVE: {
      const { index } = payload;
      if (state.isGameEnded || state.field[index] !== "") return state;

      const newField = [...state.field];
      newField[index] = state.currentPlayer;

      const winner = checkWinner(newField);
      const isDraw = !winner && newField.every((cell) => cell !== "");

      const getNextPlayer = (currentPlayer, isDraw, winner) => {
        if (winner || isDraw) return currentPlayer;
        return currentPlayer === "X" ? "O" : "X";
      };

      return {
        ...state,
        field: newField,
        isGameEnded: Boolean(winner || isDraw),
        isDraw,
        currentPlayer: getNextPlayer(state.currentPlayer, isDraw, winner),
      };
    }

    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
};
