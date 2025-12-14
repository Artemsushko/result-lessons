import { sessions } from "../sessions";
import { deleteUser } from "../api";

export const fetchDeleteUser = async (hash, userId) => {
  if (!sessions.access(hash)) {
    return {
      error: "Access denied",
      res: null,
    };
  }

  deleteUser(userId);

  return {
    error: null,
    res: true,
  };
};
