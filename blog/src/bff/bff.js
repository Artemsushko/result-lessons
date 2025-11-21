import { addUser } from "./add-user";
import { getUser } from "./get-user";
import { createSession } from "./create-session";

export const server = {
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        error: "User have not found",
        res: null,
      };
    }

    if (authPassword !== user.password) {
      return {
        error: "Password is invalid",
        res: null,
      };
    }

    return {
      error: null,
      res: createSession(user.role_id),
    };
  },

  async register(regLogin, regPassword) {
    const user = getUser(regLogin);

    if (user) {
      return {
        error: "This login has already used",
        res: null,
      };
    }

    await addUser(regLogin, regPassword);

    return {
      error: null,
      res: createSession(user.role_id),
    };
  },
};
