import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import AddTodoForm from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import SearchBox from "./components/SearchBox/SearchBox";
import SortButton from "./components/SortButton/SortButton";
import Loader from "./components/Loader/Loader";
import styles from "./App.module.css";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    setLoading(true);
    const todoRef = ref(db, "todos");
    return onValue(
      todoRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const loadedTodos = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));
          setTodos(loadedTodos);
        } else {
          setTodos([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Ошибка при загрузке:", error);
        setLoading(false);
      }
    );
  }, []);

  const filteredTodos = todos
    .filter((todo) =>
      todo.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => {
      if (!isSorted) return 0;
      return a.title.localeCompare(b.title);
    });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <SearchBox search={search} setSearch={setSearch} />
          <AddTodoForm />
          <h1 className={styles.title}>Список Дел</h1>
          <SortButton isSorted={isSorted} setIsSorted={setIsSorted} />
          <TodoList todos={filteredTodos} />
        </div>
      )}
    </>
  );
};

export default App;
