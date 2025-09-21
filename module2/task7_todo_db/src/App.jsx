import { useEffect, useState } from "react";
import AddTodoForm from "./components/Form";
import styles from "./App.module.css";
const TODOS_URL = "http://localhost:3006/todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(TODOS_URL)
      .then((loadedData) => loadedData.json())
      .then((todos) => {
        setTodos(todos);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => setLoading(false));
  }, []);

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

  const handleDelete = (id) => {
    fetch(`${TODOS_URL}/${id}`, { method: "DELETE" })
      .then(() => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      })
      .catch(console.error);
  };

  return (
    <>
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={styles.container}>
          <AddTodoForm onAdd={handleAddTodo} />
          <h1 className={styles.title}>Список Дел</h1>
          <ul className={styles.todoList}>
            {todos.length < 1 ? (
              <p className={styles.emptyList}>Список дел пуст</p>
            ) : (
              todos.map((todo) => (
                <li key={todo.id} className={styles.todoItem}>
                  <span
                    className={`${styles.todoText} ${
                      todo.completed ? styles.completed : ""
                    }`}
                  >
                    {todo.title}
                  </span>
                  <button
                    className={styles.deleteButton}
                    onClick={() => {
                      if (window.confirm("Удалить это дело?"))
                        handleDelete(todo.id);
                    }}
                  >
                    ×
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default App;
