import { sessions } from "../sessions";
import { ROLE } from "../constants";
import { getDate } from "../utils";
import { addComment } from "../api";

export const createComment = async (hash, author, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
  if (!sessions.access(hash, accessRoles)) {
    return {
      error: "Access denied",
      res: null,
    };
  }

  const newComment = {
    id: Date.now(),
    postId,
    author,
    content,
    published_at: getDate(),
  };

  const savedComment = await addComment(newComment);

  return {
    error: null,
    res: savedComment,
  };
};
