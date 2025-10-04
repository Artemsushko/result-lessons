import { Link } from "react-router-dom";
import logo from "../../assets/todo-list-logo.png";

import styles from "./TodoHeader.module.css";

const TodoHeader = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Todo Logo" />
      </Link>
    </div>
  );
};

export default TodoHeader;
