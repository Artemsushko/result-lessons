import { useState } from "react";
import { useDebounce } from "./useDebounce";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  const debouncedSearch = useDebounce(search);

  const filteredTodos = todos
    .filter((todo) =>
      todo.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => {
      if (!isSorted) return 0;
      return a.title.localeCompare(b.title);
    });

  return {
    todos: filteredTodos,
    setTodos,
    search,
    setSearch,
    isSorted,
    setIsSorted,
  };
};
