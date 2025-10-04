import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
      return () => clearTimeout(handler);
    }, delay);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
