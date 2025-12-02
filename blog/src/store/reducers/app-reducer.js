import { ACTION_TYPE } from "../actions";
import { initialAppState } from "../initial-states";

export const appReducer = (state = initialAppState, { type }) => {
  switch (type) {
    case ACTION_TYPE.LOGOUT:
      return {
        ...state,
        wasLogout: !state.wasLogout,
      };
    case ACTION_TYPE.RESET_WAS_LOGOUT:
      return {
        ...state,
        wasLogout: false,
      };
    default:
      return state;
  }
};
