import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, setTodos, TODOS_URL }) => {
  return (
    <ul className={styles.todoList}>
      {todos.length < 1 ? (
        <p className={styles.emptyList}>Список дел пуст</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            TODOS_URL={TODOS_URL}
            setTodos={setTodos}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
