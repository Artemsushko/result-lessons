import { useEffect } from "react";
import AddTodoForm from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import SearchBox from "../SearchBox/SearchBox";
import SortButton from "../SortButton/SortButton";
import { useTodos } from "../../hooks/useTodos";
import { AppContext } from "../../AppContext";
import styles from "./InnerApp.module.css";
const TODOS_URL = "http://localhost:3000/todos";

export const InnerApp = () => {
  const { todos, setTodos, search, setSearch, isSorted, setIsSorted } =
    useTodos();

  useEffect(() => {
    fetch(TODOS_URL)
      .then((loadedData) => loadedData.json())
      .then((todos) => setTodos(todos))
      .catch(console.error);
  }, []);

  return (
    <div className={styles.container}>
      <SearchBox search={search} setSearch={setSearch} />
      <AddTodoForm TODOS_URL={TODOS_URL} setTodos={setTodos} />
      <h1 className={styles.title}>Список Дел</h1>
      <SortButton isSorted={isSorted} setIsSorted={setIsSorted} />
      <AppContext.Provider value={{ setTodos, TODOS_URL }}>
        <TodoList todos={todos} />
      </AppContext.Provider>
    </div>
  );
};
