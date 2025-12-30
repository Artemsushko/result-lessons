import { sessions } from "../sessions";
import { deleteUser } from "../api";
import { ROLE } from "../constants";

export const fetchDeleteUser = async (hash, userId) => {
  const accessRoles = [ROLE.ADMIN];
  if (!sessions.access(hash, accessRoles)) {
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
