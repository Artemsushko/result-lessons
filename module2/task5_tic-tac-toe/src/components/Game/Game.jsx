import { useState } from "react";
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
  const [gameState, setGameState] = useState({
    currentPlayer: "X",
    isGameEnded: false,
    isDraw: false,
    field: Array(9).fill(""),
  });

  const checkWinner = (field, player) =>
    WIN_PATTERNS.some((pattern) =>
      pattern.every((index) => field[index] === player)
    );

  const checkDraw = (field) => field.every((cell) => cell !== "");

  const switchPlayer = (player) => (player === "X" ? "O" : "X");

  const handleMove = (index) => {
    const { field, currentPlayer, isGameEnded } = gameState;
    if (field[index] !== "" || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;

    if (checkWinner(newField, currentPlayer)) {
      setGameState((prev) => ({
        ...prev,
        field: newField,
        isGameEnded: true,
      }));
      return;
    }

    if (checkDraw(newField)) {
      setGameState((prev) => ({
        ...prev,
        field: newField,
        isDraw: true,
      }));
      return;
    }

    setGameState((prev) => ({
      ...prev,
      field: newField,
      currentPlayer: switchPlayer(currentPlayer),
    }));
  };

  const resetGame = () => {
    setGameState({
      currentPlayer: "X",
      isGameEnded: false,
      isDraw: false,
      field: Array(9).fill(""),
    });
  };

  return (
    <GameLayOut {...gameState} handleMove={handleMove} resetGame={resetGame} />
  );
};

export default Game;
