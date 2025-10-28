import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import styles from "./TodoInfoPage.module.css";
import { memo } from "react";

const TodoInfoPage = memo(({ TODOS_URL, refreshTodos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${TODOS_URL}/${id}`)
      .then((res) => {
        if (!res.ok) {
          navigate("/404", { replace: true });
          return null;
        }
        return res.json();
      })
      .then((data) => setTodo(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const handleToggle = () => {
    fetch(`${TODOS_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    })
      .then((res) => {
        if (!res.ok) {
          navigate("/404", { replace: true });
          return null;
        }
        return res.json();
      })
      .then((updatedTodo) => {
        setTodo(updatedTodo);
        refreshTodos();
      })
      .catch(console.error);
  };

  const handleDelete = () => {
    if (!window.confirm("Удалить это дело?")) return;
    fetch(`${TODOS_URL}/${id}`, { method: "DELETE" })
      .then(() => {
        refreshTodos();
        navigate("/");
      })
      .catch(console.error);
  };

  if (loading) return <Loader />;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{todo.title}</h2>
      <p
        className={`${styles.status} ${
          todo.completed ? styles.completed : styles.notCompleted
        }`}
      >
        Статус: {todo.completed ? "Выполнено" : "Не выполнено"}
      </p>

      <div className={styles.buttons}>
        <button
          onClick={handleToggle}
          className={`${styles.button} ${styles.toggle} ${
            todo.completed ? styles.completed : ""
          }`}
        >
          {todo.completed
            ? "Отметить как невыполненное"
            : "Отметить как выполненное"}
        </button>

        <button
          onClick={handleDelete}
          className={`${styles.button} ${styles.delete}`}
        >
          Удалить задачу
        </button>

        <button
          onClick={() => navigate(-1)}
          className={`${styles.button} ${styles.back}`}
        >
          Назад
        </button>
      </div>
    </div>
  );
});

export default TodoInfoPage;
