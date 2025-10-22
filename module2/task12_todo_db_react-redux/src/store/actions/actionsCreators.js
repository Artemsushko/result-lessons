export const setSearchCreator = (value) => ({
  type: "SET_SEARCH",
  payload: value,
});
export const toggleSortCreator = () => ({ type: "SET_SORTED" });
export const addTodoCreator = (value) => ({ type: "ADD_TODO", payload: value });
export const deleteTodoCreator = (value) => ({
  type: "DELETE_TODO",
  payload: value,
});

export const toggleTodoCreator = (value) => ({
  type: "TOGGLE_TODO",
  payload: value,
});
