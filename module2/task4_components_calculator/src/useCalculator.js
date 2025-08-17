import { useState } from "react";

export function useCalculator() {
  const [operand1, setOperand1] = useState("0");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [isResult, setIsResult] = useState(false);

  const OPERATIONS = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "×": (a, b) => a * b,
    "÷": (a, b) => (b === 0 ? "Error" : a / b),
  };

  const resetCalculator = (operand1Value, isResult) => {
    setOperand1(operand1Value);
    setOperand2("");
    setOperator("");
    setIsResult(isResult);
  };

  const calculate = () => {
    if (operand1 && operator && operand2) {
      const num1 = parseFloat(operand1);
      const num2 = parseFloat(operand2);
      const result = OPERATIONS[operator]?.(num1, num2);

      resetCalculator(result, true);
    }
  };

  const showOnDisplay = (value, isOperator) => {
    if (operand1 === "Error" && value !== "C" && isNaN(value)) {
      return;
    }

    if (!isNaN(value)) {
      setIsResult(false);
      if (operator == "") {
        setOperand1((prev) =>
          prev === "0" || prev === "Error" ? value : prev + value
        );
      } else {
        setOperand2((prev) => (prev === "0" ? value : prev + value));
      }
    } else if (isOperator(value)) {
      setIsResult(false);
      setOperator(value);
    } else if (value === "C") {
      resetCalculator("0", false);
    } else if (value === "=") {
      calculate();
    }
  };

  return { operand1, operand2, operator, isResult, showOnDisplay };
}
