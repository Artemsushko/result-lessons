import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <h1>404 — Страница не найдена</h1>
      <p>К сожалению, такой страницы не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default NotFound;
