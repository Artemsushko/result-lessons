import { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage/TodoListPage";
import TodoInfoPage from "./pages/TodoInfoPage/TodoInfoPage";
import Loader from "./components/Loader/Loader";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import NotFound from "./pages/404/NotFound";
const TODOS_URL = "http://localhost:3006/todos";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const refreshTodos = useCallback(() => {
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

  useEffect(() => {
    refreshTodos();
  }, [refreshTodos]);

  return (
    <>
      <TodoHeader />
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loader />
            ) : (
              <TodoListPage
                TODOS_URL={TODOS_URL}
                todos={todos}
                setTodos={setTodos}
              />
            )
          }
        ></Route>
        <Route
          path="/todo-info/:id"
          element={
            <TodoInfoPage TODOS_URL={TODOS_URL} refreshTodos={refreshTodos} />
          }
        ></Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} replace />
      </Routes>
    </>
  );
};

export default App;
