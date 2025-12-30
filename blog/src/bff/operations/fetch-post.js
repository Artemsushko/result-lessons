import { getPost } from "../api";

export const fetchPost = async (postId) => {
  const post = await getPost(postId);
  return !post
    ? {
        error: "Post not found",
        res: null,
      }
    : {
        error: null,
        res: post,
      };
};
