import { sessions } from "../sessions";
import { ROLE } from "../constants";
import { updateComment } from "../api";

export const saveComment = async (hash, commentData) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
  if (!sessions.access(hash, accessRoles)) {
    return {
      error: "Access denied",
      res: null,
    };
  }

  const { id } = commentData;
  const updatedComment = await updateComment(commentData, id);

  return {
    error: null,
    res: updatedComment,
  };
};
