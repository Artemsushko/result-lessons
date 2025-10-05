import { NavLink } from "react-router-dom";
import styles from "./TodoItem.module.css";

const TodoItem = ({ id, completed, title }) => {
  return (
    <li key={id} className={styles.todoItem}>
      <NavLink
        className={`${styles.todoText} ${completed ? styles.completed : ""}`}
        to={`/todo-info/${id}`}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default TodoItem;
