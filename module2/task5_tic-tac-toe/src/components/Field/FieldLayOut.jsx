import styles from "./Field.module.css";

const FieldLayOut = ({ field, makeMove }) => {
  return (
    <div className={styles.board}>
      {field.map((btn, index) => (
        <button
          onClick={() => makeMove(index)}
          key={index}
          className={styles.cell}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default FieldLayOut;
