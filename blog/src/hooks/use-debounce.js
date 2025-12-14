import { useSelector } from "react-redux";
import { selectSearch } from "../store/selectors/selectors";
import { useEffect, useState } from "react";

export const useDebounce = (delay = 500) => {
  const search = useSelector(selectSearch);
  const [debouncedSerch, setDebouncedSerach] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSerach(search);
      return () => clearTimeout(handler);
    }, delay);
  }, [search, delay]);

  return debouncedSerch;
};
