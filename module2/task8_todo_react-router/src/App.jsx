import { useEffect, useState } from "react";
import TodoListPage from "./pages/TodoListPage";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
const TODOS_URL = "http://localhost:3006/todos";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={<TodoListPage TODOS_URL={TODOS_URL} todos={todos} />}
            ></Route>
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
