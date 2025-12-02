import { getDate } from "./get-date";

export const addUser = (login, password) => {
  const res = fetch("http://localhost:3005/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      login,
      password,
      registred_at: getDate(),
      role_id: 2,
    }),
  }).then((res) => res.json());

  return res;
};
