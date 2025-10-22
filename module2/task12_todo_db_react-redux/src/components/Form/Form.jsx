import { useState } from "react";
import styles from "./Form.module.css";
import { addTodoAsync } from "../../store/actions/todosActions";
import { useDispatch } from "react-redux";

const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    dispatch(addTodoAsync(newTodo));
    setNewTodo("");
  };

  return (
    <form className={styles.addTodoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        placeholder="Введите новое дело"
        onChange={(e) => setNewTodo(e.target.value)}
        required
      />
      <button type="submit">Добавить дело</button>
    </form>
  );
};

export default AddTodoForm;
