import { useState } from "react";
import styles from "./Form.module.css";
import { ref, push } from "firebase/database";
import { db } from "../../firebase";

const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = async (title) => {
    const todoRef = ref(db, "todos");
    try {
      await push(todoRef, { title, completed: false });
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
