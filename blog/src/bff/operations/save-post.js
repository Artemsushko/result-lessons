import { sessions } from "../sessions";
import { ROLE } from "../constants";
import { updatePost } from "../api";

export const savePost = async (hash, postData) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
  if (!sessions.access(hash, accessRoles)) {
    return {
      error: "Access denied",
      res: null,
    };
  }
  const { id } = postData;
  const updatedPost = await updatePost(postData, id);

  return {
    error: null,
    res: updatedPost,
  };
};
