import styles from "./Game.module.css";
import Informacion from "../Informacion/Informacion";
import Field from "../Field/Field";
import { ResetButton } from "./ResetButton/ResetButton";

const GameLayout = () => {
  return (
    <>
      <div className={styles.container}>
        <Informacion />
        <Field />
        <ResetButton />
      </div>
    </>
  );
};

export default GameLayout;
