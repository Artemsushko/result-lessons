import { useState } from "react";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import TodoList from "../components/TodoList/TodoList";
import SearchBox from "../components/SearchBox/SearchBox";
import SortButton from "../components/SortButton/SortButton";
import useFilteredTodos from "../hooks/useFilteredTodos";
import styles from "../App.module.css";

const TodoListPage = ({ TODOS_URL, todos }) => {
  const [search, setSearch] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const filteredTodos = useFilteredTodos(isSorted, search, todos);

  return (
    <div className={styles.container}>
      <TodoHeader />
      <title>Todo List</title>
      <SearchBox search={search} setSearch={setSearch} />
      <AddTodoForm TODOS_URL={TODOS_URL} setTodos={setTodos} />
      <h1 className={styles.title}>Список Дел</h1>
      <SortButton isSorted={isSorted} setIsSorted={setIsSorted} />
      <TodoList todos={filteredTodos} />
    </div>
  );
};

export default TodoListPage;
