import { sessions } from "../sessions";
import { ROLE } from "../constants";
import { getDate } from "../utils";
import { addPost } from "../api";

export const createPost = async (hash, createdPost) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
  if (!sessions.access(hash, accessRoles)) {
    return {
      error: "Access denied",
      res: null,
    };
  }

  const newPost = {
    ...createdPost,
    published_at: getDate(),
  };

  const savedPost = await addPost(newPost);

  return {
    error: null,
    res: savedPost,
  };
};
