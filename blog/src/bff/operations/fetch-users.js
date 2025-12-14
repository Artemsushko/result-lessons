import { sessions } from "../sessions";
import { getUsers } from "../api";

export const fetchUsers = async (hash) => {
  if (!sessions.access(hash)) {
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
