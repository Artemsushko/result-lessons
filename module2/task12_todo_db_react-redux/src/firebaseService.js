import { db } from "./firebase";
import { ref, push, update, remove } from "firebase/database";

export const addTodo = (title) => {
  const todoRef = ref(db, "todos");
  return push(todoRef, { title, completed: false });
};

export const deleteTodo = (id) => {
  const todoRef = ref(db, `todos/${id}`);
  return remove(todoRef);
};

export const toggleTodo = (id, completed) => {
  const todoRef = ref(db, `todos/${id}`);
  return update(todoRef, { completed: !completed });
};
