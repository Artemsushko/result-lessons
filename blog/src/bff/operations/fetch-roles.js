import { sessions } from "../sessions";
import { getRoles } from "../api";

export const fetchRoles = async (hash) => {
  if (!sessions.access(hash)) {
    return {
      error: "Access denied",
      res: null,
    };
  }

  const roles = await getRoles();

  return {
    error: null,
    res: roles,
  };
};
