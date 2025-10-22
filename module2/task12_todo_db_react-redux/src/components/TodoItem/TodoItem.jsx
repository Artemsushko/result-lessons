import styles from "./TodoItem.module.css";
import {
  deleteTodoAsync,
  toggleTodoAsync,
} from "../../store/actions/todosActions";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, completed, title }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Удалить это дело?")) dispatch(deleteTodoAsync(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodoAsync(id, completed));
  };

  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => handleToggle()}
      ></input>
      <span
        className={`${styles.todoText} ${completed ? styles.completed : ""}`}
      >
        {title}
      </span>
      <button className={styles.deleteButton} onClick={() => handleDelete()}>
        ×
      </button>
    </li>
  );
};

export default TodoItem;
