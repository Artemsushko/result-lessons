import styles from "./Game.module.css";
import PropTypes from "prop-types";
import Informacion from "../Informacion/Informacion";
import Field from "../Field/Field";

const GameLayout = ({ resetGame }) => {
  return (
    <>
      <div className={styles.container}>
        <Informacion />
        <Field />
        <button className={styles.resetButton} onClick={resetGame}>
          Начать сначала
        </button>
      </div>
    </>
  );
};

GameLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(["X", "O"]).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleMove: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default GameLayout;
