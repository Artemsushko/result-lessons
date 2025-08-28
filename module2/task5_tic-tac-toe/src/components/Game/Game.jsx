import { useStore } from "../hooks/useStore";
import GameLayOut from "./GameLayOut";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // горизонталь
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // вертикаль
  [0, 4, 8],
  [2, 4, 6], // диагональ
];

const Game = () => {
  const { getState, updateState, reset } = useStore();

  const checkWinner = (field, player) =>
    WIN_PATTERNS.some((pattern) =>
      pattern.every((index) => field[index] === player)
    );

  const checkDraw = (field) => field.every((cell) => cell !== "");

  const switchPlayer = (player) => (player === "X" ? "O" : "X");

  const handleMove = (index) => {
    const { field, currentPlayer, isGameEnded } = getState();
    if (field[index] !== "" || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;

    let updates = { field: newField };

    if (checkWinner(newField, currentPlayer)) updates.isGameEnded = true;
    else if (checkDraw(newField)) updates.isDraw = true;
    else updates.currentPlayer = switchPlayer(currentPlayer);

    updateState(updates);
  };

  const resetGame = () => reset();

  return (
    <GameLayOut {...getState()} handleMove={handleMove} resetGame={resetGame} />
  );
};

export default Game;
