import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul className={styles.todoList}>
      {todos.length < 1 ? (
        <li className={styles.emptyList}>Список дел пуст</li>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      )}
    </ul>
  );
};

export default TodoList;
