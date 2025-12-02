import { ACTION_TYPE } from "../actions";
import { initialUserState } from "../initial-states";

export const userReducer = (state = initialUserState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        ...payload,
      };
    case ACTION_TYPE.LOGOUT:
      return initialUserState;
    default:
      return state;
  }
};
