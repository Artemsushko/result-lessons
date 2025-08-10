import { useState } from "react";
import styles from "./app.module.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const isValueValid = !!value;

  const onInputButtonClick = () => {
    const promptValue = prompt("Введите значение");
    if (promptValue === null || promptValue.trim().length < 3) {
      setError("Введенное значение должно содержать минимум 3 символа");
      setValue("");
    } else {
      setError("");
      setValue(promptValue);
    }
  };

  const onAddButtonClick = () => {
    if (value !== null && value !== "") {
      setList([
        ...list,
        {
          id: Date.now(),
          value,
          createdAt: new Date().toLocaleString("ru-RU"),
        },
      ]);
      setError("");
      setValue("");
    }
  };

  const renderListItems = () => {
    return list.map((listItem) => {
      const { id, value, createdAt } = listItem;
      return (
        <li key={id} className={styles.listItem}>
          {value} <span className={styles.date}>{createdAt}</span>
        </li>
      );
    });
  };

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.pageHeading}>Ввод значения</h1>
        <p className={styles.noMarginText}>
          Текущее значение <code>value</code>: "
          <output className={styles.currentValue}>{value}</output>"
        </p>
        {error !== "" && <div className={styles.error}>{error}</div>}
        <div className={styles.buttonsContainer}>
          <button onClick={onInputButtonClick} className={styles.button}>
            Ввести новое
          </button>
          <button
            onClick={onAddButtonClick}
            className={styles.button}
            disabled={!isValueValid}
          >
            Добавить в список
          </button>
        </div>
        <div className={styles.listContainer}>
          <h2 className={styles.listHeading}>Список:</h2>
          {list.length === 0 ? (
            <p className={styles.noMarginText}>Нет добавленных элементов</p>
          ) : (
            <ul className={styles.list}>{renderListItems()}</ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
