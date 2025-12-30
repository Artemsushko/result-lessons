import { sessions } from "../sessions";
import { deleteComment } from "../api";
import { ROLE } from "../constants";

export const fetchDeleteComment = async (hash, commentId) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
  if (!sessions.access(hash, accessRoles)) {
    return {
      error: "Access denied",
      res: null,
    };
  }

  deleteComment(commentId);

  return {
    error: null,
    res: true,
  };
};
