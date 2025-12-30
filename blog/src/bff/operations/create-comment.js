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
    id: new Date(),
    postId,
    author,
    content,
    createdAt: getDate(),
  };

  await addComment(newComment);

  return {
    error: null,
    res: true,
  };
};
