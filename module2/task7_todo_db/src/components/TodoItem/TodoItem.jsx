import styles from "./TodoItem.module.css";
import { deleteTodo, toggleTodo } from "../../firebaseService";

const TodoItem = ({ id, completed, title }) => {
  const handleDelete = async () => {
    try {
      await deleteTodo(id);
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  const handleToggle = async () => {
    try {
      await toggleTodo(id, completed);
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  };

  return (
    <li className={styles.todoItem}>
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
