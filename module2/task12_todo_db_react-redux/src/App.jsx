import { useEffect } from "react";
import AddTodoForm from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import SearchBox from "./components/SearchBox/SearchBox";
import SortButton from "./components/SortButton/SortButton";
import Loader from "./components/Loader/Loader";
import styles from "./App.module.css";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
          dispatch({ type: "SET_TODOS", payload: loadedTodos });
        } else {
          dispatch({ type: "SET_TODOS", payload: [] });
        }
      },
      (error) => {
        console.error("Ошибка при загрузке:", error);
      }
    );
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <div className={styles.container}>
          <SearchBox />
          <AddTodoForm />
          <h1 className={styles.title}>Список Дел</h1>
          <SortButton />
          <TodoList />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
