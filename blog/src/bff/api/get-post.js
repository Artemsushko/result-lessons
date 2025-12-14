import { getPosts } from "./get-posts";

export const getPost = async (postId) => {
  const posts = await getPosts();
  return posts.find(({ id }) => id === postId);
};
