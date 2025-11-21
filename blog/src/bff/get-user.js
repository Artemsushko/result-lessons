import { getUsers } from "./get-users";

export const getUser = async (comparedLogin) => {
  const users = await getUsers();
  return users.find(({ login }) => login === comparedLogin);
};
