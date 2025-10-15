import { useReduxStore } from "../hooks/useReduxStore";
import GameLayOut from "./GameLayOut";

const Game = () => {
  const { dispatch } = useReduxStore();

  const resetGame = () => dispatch({ type: "RESET_GAME" });
  return <GameLayOut resetGame={resetGame} />;
};

export default Game;
