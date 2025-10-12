import { Suspense, useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import AddTodoForm from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import SearchBox from "./components/SearchBox/SearchBox";
import SortButton from "./components/SortButton/SortButton";
import Loader from "./components/Loader/Loader";
import { AppContext } from "./AppContext";
import { ErrorBoundary } from "./ErrorBoundery";
import styles from "./App.module.css";
const TODOS_URL = "http://localhost:3000/todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  const debouncedSerach = useDebounce(search);

  useEffect(() => {
    fetch(TODOS_URL)
      .then((loadedData) => loadedData.json())
      .then((todos) => {
        setTodos(todos);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const filteredTodos = todos
    .filter((todo) =>
      todo.title.toLowerCase().includes(debouncedSerach.toLowerCase())
    )
    .sort((a, b) => {
      if (!isSorted) return 0;
      return a.title.localeCompare(b.title);
    });

  return (
    <>
      {
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <div className={styles.container}>
              <SearchBox search={search} setSearch={setSearch} />
              <AddTodoForm TODOS_URL={TODOS_URL} setTodos={setTodos} />
              <h1 className={styles.title}>Список Дел</h1>
              <SortButton isSorted={isSorted} setIsSorted={setIsSorted} />
              <AppContext value={{ setTodos, TODOS_URL }}>
                <TodoList todos={filteredTodos} />
              </AppContext>
            </div>
          </Suspense>
        </ErrorBoundary>
      }
    </>
  );
};

export default App;
