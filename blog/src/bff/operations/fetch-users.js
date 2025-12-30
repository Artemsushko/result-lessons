import { sessions } from "../sessions";
import { getUsers } from "../api";
import { ROLE } from "../constants";

export const fetchUsers = async (hash) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(hash, accessRoles)) {
    return {
      error: "Access denied",
      res: null,
    };
  }

  const users = await getUsers();

  return {
    error: null,
    res: users,
  };
};
