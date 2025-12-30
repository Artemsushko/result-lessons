import { sessions } from "../sessions";
import { setUserRole } from "../api";
import { ROLE } from "../constants";

export const updateUserRole = (hash, userId, selectedRole) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(hash, accessRoles)) {
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
