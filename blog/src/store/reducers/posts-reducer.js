import { initialPostsState } from "../initial-states";

export const postsReducer = (state = initialPostsState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
