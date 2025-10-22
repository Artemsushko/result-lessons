import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
import { useFilteredTodos } from "../../hooks/useFilteredTodos";

const TodoList = () => {
  const filteredTodos = useFilteredTodos();
  return (
    <ul className={styles.todoList}>
      {filteredTodos.length < 1 ? (
        <li className={styles.emptyList}>Список дел пуст</li>
      ) : (
        filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      )}
    </ul>
  );
};

export default TodoList;
