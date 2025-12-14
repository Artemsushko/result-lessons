import { getUser } from "../api";
import { sessions } from "../sessions";

export const authorize = async (authLogin, authPassword) => {
  const user = await getUser(authLogin);

  const { id, login, password, role_id: roleId } = user;

  if (!user || authPassword !== password) {
    return {
      error: !user ? "User not found" : "Password is invalid",
      res: null,
    };
  }

  return {
    error: null,
    res: {
      id,
      login,
      roleId,
      session: sessions.create(user),
    },
  };
};
