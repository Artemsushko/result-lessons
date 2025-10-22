import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSearch } from "../store/selectors/selectors";

export const useDebounce = (delay = 500) => {
  const search = useSelector(selectSearch);
  const [debounceValue, setDebounceValue] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(search);
    }, delay);
    return () => clearTimeout(handler);
  }, [search, delay]);

  return debounceValue;
};
