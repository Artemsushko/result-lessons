import { addTodo, deleteTodo, toggleTodo } from "../../firebaseService";

export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_SORTED = "SET_SORTED";
export const SET_SEARCH = "SET_SEARCH";

export const addTodoAsync = (title) => async () => {
  try {
    await addTodo(title);
  } catch (error) {
    console.error("Ошибка при добавлении дела:", error);
  }
};

export const deleteTodoAsync = (id) => async () => {
  try {
    await deleteTodo(id);
  } catch (error) {
    console.error("Ошибка при удалении:", error);
  }
};

export const toggleTodoAsync = (id, completed) => async () => {
  try {
    await toggleTodo(id, completed);
  } catch (error) {
    console.error("Ошибка при обновлении:", error);
  }
};
