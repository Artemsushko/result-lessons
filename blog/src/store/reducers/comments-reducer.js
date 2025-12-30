import { ACTION_TYPE } from "../actions";
import { initialCommentsState } from "../initial-states";

export const commentsReducer = (
  state = initialCommentsState,
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPE.SET_COMMENTS_DATA:
      return payload;
    default:
      return state;
  }
};
