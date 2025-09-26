import styles from "./TodoItem.module.css";
import { db } from "../../firebase";
import { ref, remove, update } from "firebase/database";

const TodoItem = ({ id, completed, title }) => {
  const handleDelete = async () => {
    const todoRef = ref(db, `todos/${id}`);
    try {
      await remove(todoRef);
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  const handleToggle = async () => {
    const todoRef = ref(db, `todos/${id}`);
    try {
      await update(todoRef, { completed: !completed });
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
