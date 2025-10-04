import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TODOS_URL = "http://localhost:3006/todos";

const TodoInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`${TODOS_URL}/${id}`)
      .then((res) => res.json())
      .then(setTodo)
      .catch(console.error);
  }, [id]);

  const handleToggle = () => {
    fetch(`${TODOS_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    })
      .then((res) => res.json())
      .then(setTodo)
      .catch(console.error);
  };

  const handleDelete = () => {
    if (!window.confirm("Удалить это дело?")) return;
    fetch(`${TODOS_URL}/${id}`, { method: "DELETE" })
      .then(() => navigate("/"))
      .catch(console.error);
  };

  if (!todo) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>Статус: {todo.completed ? "Выполнено" : "Не выполнено"}</p>
      <button onClick={handleToggle}>
        {todo.completed
          ? "Отметить как невыполненное"
          : "Отметить как выполненное"}
      </button>
      <button onClick={handleDelete}>Удалить задачу</button>
    </div>
  );
};

export default TodoInfoPage;
