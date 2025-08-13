import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

export const App = () => {
  const [steps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);
  let isOnTheFirstStep = activeIndex === 0;
  let isOnTheLastStep = activeIndex === steps.length - 1;

  const clickBack = () => {
    if (!isOnTheFirstStep) {
      setActiveIndex((prev) => prev - 1);
    }
  };
  const clickForward = () => {
    if (!isOnTheLastStep) {
      setActiveIndex((prev) => prev + 1);
    }
  };
  const startOver = () => {
    setActiveIndex(0);
  };

  const renderSteps = () => {
    return steps.map((step, index) => {
      let className = styles["steps-item"];
      if (index < activeIndex) className += " " + styles.done;
      if (index === activeIndex) className += " " + styles.active;

      return (
        <li key={index} className={className}>
          <button
            className={styles["steps-item-button"]}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
          {step.title}
        </li>
      );
    });
  };

  const backBtn = (
    <button className={styles.button} onClick={clickBack}>
      Назад
    </button>
  );
  const forwardBtn = (
    <button className={styles.button} onClick={clickForward}>
      Далее
    </button>
  );
  const startOverBtn = (
    <button className={styles.button} onClick={startOver}>
      Начать сначала
    </button>
  );

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles["steps-content"]}>
            {steps[activeIndex].content}
          </div>
          <ul className={styles["steps-list"]}>{renderSteps()}</ul>
          <div className={styles["buttons-container"]}>
            {backBtn}
            {isOnTheLastStep ? startOverBtn : forwardBtn}
          </div>
        </div>
      </div>
    </div>
  );
};
