import { sessions } from "../sessions";
import { deletePost } from "../api";
import { ROLE } from "../constants";

export const fetchDeletePost = async (hash, postId) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
  if (!sessions.access(hash, accessRoles)) {
    return {
      error: "Access denied",
      res: null,
    };
  }

  deletePost(postId);

  return {
    error: null,
    res: true,
  };
};
