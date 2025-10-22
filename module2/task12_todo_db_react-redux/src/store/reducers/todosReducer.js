import { initialTodosState } from "../initialStates/initialTodosState";
import {
  ADD_TODO,
  DELETE_TODO,
  SET_TODOS,
  TOGGLE_TODO,
} from "../actions/todosActions";

export const todosReducer = (state = initialTodosState, { type, payload }) => {
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: payload };

    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    default:
      return state;
  }
};
