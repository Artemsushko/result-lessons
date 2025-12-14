import { useEffect, useState } from "react";
import { getPosts } from "../bff/api";
import { useDebounce } from "./use-debounce";

export const useFilteredPosts = () => {
  const [posts, setPosts] = useState([]);
  const debouncedSerch = useDebounce();

  useEffect(() => {
    const loadPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  const filteredPosts = posts.filter(({ title }) =>
    title.toLowerCase().includes(debouncedSerch.toLowerCase())
  );

  return filteredPosts;
};
