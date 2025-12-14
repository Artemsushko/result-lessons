import { ACTION_TYPE } from "../actions";
import { initialPostsState } from "../initial-states";

export const postsReducer = (state = initialPostsState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};
