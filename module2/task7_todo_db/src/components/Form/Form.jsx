import { useState } from "react";
import styles from "./Form.module.css";
import { addTodo } from "../../firebaseService";

const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = async (title) => {
    try {
      await addTodo(title);
    } catch (error) {
      console.error("Ошибка при добавлении дела:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    handleAddTodo(newTodo);
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
