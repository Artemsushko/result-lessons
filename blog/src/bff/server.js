import { addUser } from "./add-user";
import { getUser } from "./get-user";
import { sessions } from "./sessions";

export const server = {
  async logout(session) {
    sessions.remove(session);
  },
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user || authPassword !== user.password) {
      return {
        error: !user ? "User not found" : "Password is invalid",
        res: null,
      };
    }

    const { id, login, role_id } = user;

    return {
      error: null,
      res: {
        id,
        login,
        roleId: role_id,
        session: sessions.create(user),
      },
    };
  },

  async register(regLogin, regPassword) {
    const user = await getUser(regLogin);

    if (user) {
      return {
        error: "This login is already taken",
        res: null,
      };
    }

    const newUser = await addUser(regLogin, regPassword);
    const { id, login, role_id } = newUser;

    return {
      error: null,
      res: {
        id,
        login,
        roleId: role_id,
        session: sessions.create(newUser),
      },
    };
  },
};
