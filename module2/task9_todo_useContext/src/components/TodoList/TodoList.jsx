import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul className={styles.todoList}>
      {todos.length < 1 ? (
        <p className={styles.emptyList}>Список дел пуст</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      )}
    </ul>
  );
};

export default TodoList;
