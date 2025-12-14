import { sessions } from "../sessions";
import { setUserRole } from "../api";

export const updateUserRole = (hash, userId, selectedRole) => {
  if (!sessions.access(hash)) {
    return {
      error: "Access denied",
      res: null,
    };
  }

  setUserRole(userId, selectedRole);

  return {
    error: null,
    res: true,
  };
};
