import { useState } from "react";
import styles from "./Form.module.css";

const AddTodoForm = ({ TODOS_URL, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (title) => {
    fetch(TODOS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ title, completed: false }),
    })
      .then((res) => res.json())
      .then((newTodo) => setTodos((prev) => [...prev, newTodo]))
      .catch(console.error);
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
