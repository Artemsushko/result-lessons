import { useState } from "react";
import GameLayOut from "./GameLayOut";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8],
  [2, 4, 6], // Варианты побед по диагонали
];

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

  const handleMove = (index) => {
    if (field[index] !== "" || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    const isWinner = WIN_PATTERNS.some((pattern) =>
      pattern.every((index) => newField[index] === currentPlayer)
    );
    if (isWinner) {
      setIsGameEnded(true);
      return;
    }

    const isDraw = newField.every((cell) => cell !== "");
    if (isDraw) {
      setIsDraw(true);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setCurrentPlayer("X");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(Array(9).fill(""));
  };

  return (
    <>
      <GameLayOut
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        field={field}
        handleMove={handleMove}
        resetGame={resetGame}
      ></GameLayOut>
    </>
  );
};

export default Game;
