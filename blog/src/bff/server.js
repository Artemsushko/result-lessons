import {
  authorize,
  fetchDeleteUser,
  fetchRoles,
  fetchUsers,
  logout,
  register,
  updateUserRole,
} from "./operations";

export const server = {
  authorize,
  fetchRoles,
  fetchUsers,
  logout,
  register,
  updateUserRole,
  fetchDeleteUser,
};
