import { addUser } from "./add-user";
import { getUser } from "./get-user";
import { createSession } from "./create-session";

export const server = {
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user || authPassword !== user.password) {
      return {
        error: !user ? "User not found" : "Password is invalid",
        res: null,
      };
    }

    return {
      error: null,
      res: createSession(user.role_id),
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

    return {
      error: null,
      res: createSession(newUser.role_id),
    };
  },
};
