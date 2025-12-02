import { initialPostState } from "../initial-states";

export const postReducer = (state = initialPostState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
