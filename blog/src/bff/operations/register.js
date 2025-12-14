import { sessions } from "../sessions";
import { getUser, addUser } from "../api";

export const register = async (regLogin, regPassword) => {
  const user = await getUser(regLogin);

  if (user) {
    return {
      error: "This login is already taken",
      res: null,
    };
  }

  const newUser = await addUser(regLogin, regPassword);
  const { id, login, role_id: roleId } = newUser;

  return {
    error: null,
    res: {
      id,
      login,
      roleId,
      session: sessions.create(newUser),
    },
  };
};
