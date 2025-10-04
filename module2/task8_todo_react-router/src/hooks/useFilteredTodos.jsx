import useDebounce from "./useDebounce";

const useFilteredTodos = (isSorted, search, todos) => {
  const debouncedSearch = useDebounce(search);

  const filtered = todos.filter((todo) =>
    todo.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return isSorted
    ? filtered.sort((a, b) => a.title.localeCompare(b.title))
    : filtered;
};

export default useFilteredTodos;
