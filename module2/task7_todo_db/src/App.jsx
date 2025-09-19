import { useEffect, useState } from "react";
import styles from "./App.module.css";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetch(TODOS_URL)
        .then((loadedData) => loadedData.json())
        .then((todos) => setTodos(todos))
        .catch((e) => {
          console.error(e);
        })
        .finally(() => setLoading(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
          <h1 className={styles.title}>Список Дел</h1>
          <ul className={styles.todoList}>
            {todos.map((todo) => (
              <li key={todo.id} className={styles.todoItem}>
                <span
                  className={`${styles.todoText} ${
                    todo.completed ? styles.completed : ""
                  }`}
                >
                  {todo.title}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default App;
