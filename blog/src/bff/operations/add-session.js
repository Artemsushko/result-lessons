import { sessions } from "../sessions";

export const addSession = (hash, user) => {
  sessions.add(hash, user);
};
