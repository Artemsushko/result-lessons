import { getDate } from "./get-date";

export const addUser = (login, password) =>
  fetch("http://localhost:3005/users", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      registred_at: getDate(),
      role_id: 2,
    }),
  });
