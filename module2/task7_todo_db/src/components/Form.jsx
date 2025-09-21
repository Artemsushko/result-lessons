import { useState } from "react";
import styles from "./Form.module.css";

const AddTodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form className={styles.addTodoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        placeholder="Введите новое дело"
        onChange={(e) => setNewTodo(e.target.value)}
        required
      />
      <button type="submit">Добавить дело</button>
    </form>
  );
};

export default AddTodoForm;
