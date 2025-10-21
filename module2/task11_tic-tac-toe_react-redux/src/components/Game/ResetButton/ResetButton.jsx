import styles from "./ResetButton.module.css";
import { useDispatch } from "react-redux";

export const ResetButton = () => {
  const dispatch = useDispatch();
  const resetGame = () => dispatch({ type: "RESET_GAME" });

  return (
    <button className={styles.resetButton} onClick={resetGame}>
      Начать сначала
    </button>
  );
};
