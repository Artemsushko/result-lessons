import { initialUsersState } from "../initial-states";

export const usersReducer = (state = initialUsersState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
