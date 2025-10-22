import { useSelector } from "react-redux";
import { useDebounce } from "./useDebounce";
import { selectIsSorted, selectTodos } from "../store/selectors/selectors";
import { useMemo } from "react";

export const useFilteredTodos = () => {
  const todos = useSelector(selectTodos);
  const isSorted = useSelector(selectIsSorted);
  const debouncedSearch = useDebounce();
  const filteredTodos = useMemo(() => {
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    return isSorted
      ? [...filtered].sort((a, b) => a.title.localeCompare(b.title))
      : filtered;
  }, [todos, isSorted, debouncedSearch]);

  return filteredTodos;
};
