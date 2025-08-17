import styles from "./App.module.css";
import { useCalculator } from "./useCalculator";
const BUTTONS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "×",
  "÷",
  "=",
  "C",
];

function App() {
  const { operand1, operand2, operator, isResult, showOnDisplay } =
    useCalculator();

  const isOperator = (value) => ["+", "-", "×", "÷"].includes(value);

  const setClassName = (btn) =>
    `${styles.btn} 
    ${isOperator(btn) ? styles.operator : ""} 
    ${btn === "=" ? styles.equals : ""} ${btn === "C" ? styles.clear : ""}`;

  return (
    <div className={styles.calculator}>
      <div className={`${styles.display} ${isResult ? styles.result : ""}`}>
        {operand1} {operator} {operand2}
      </div>

      <div className={styles.buttons}>
        {BUTTONS.map((btn) => (
          <button
            key={btn}
            className={setClassName(btn)}
            onClick={() => showOnDisplay(btn, isOperator)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
