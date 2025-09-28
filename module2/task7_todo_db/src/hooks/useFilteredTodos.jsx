import { useDebounce } from "./useDebounce";

export const useFilteredTodos = (isSorted, todos, search) => {
  const debouncedSearch = useDebounce(search);
  const filtered = todos.filter((todo) =>
    todo.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return isSorted
    ? filtered.sort((a, b) => a.title.localeCompare(b.title))
    : filtered;
};
