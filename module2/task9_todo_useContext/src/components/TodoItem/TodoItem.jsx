import { useContext } from "react";
import { AppContext } from "../../AppContext";
import styles from "./TodoItem.module.css";

const TodoItem = ({ id, completed, title }) => {
  const { setTodos, TODOS_URL } = useContext(AppContext);

  const handleDelete = (id) => {
    fetch(`${TODOS_URL}/${id}`, { method: "DELETE" })
      .then(() => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      })
      .catch(console.error);
  };

  const handleToggle = (id, completed) => {
    fetch(`${TODOS_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    })
      .then((res) => res.json())
      .then((updatedTodo) => {
        setTodos((prev) =>
          prev.map((todo) =>
            todo.id === id
              ? { ...todo, completed: updatedTodo.completed }
              : todo
          )
        );
      })
      .catch(console.error);
  };

  return (
    <li key={id} className={styles.todoItem}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => handleToggle(id, completed)}
      ></input>
      <span
        className={`${styles.todoText} ${completed ? styles.completed : ""}`}
      >
        {title}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => {
          if (window.confirm("Удалить это дело?")) handleDelete(id);
        }}
      >
        ×
      </button>
    </li>
  );
};

export default TodoItem;
