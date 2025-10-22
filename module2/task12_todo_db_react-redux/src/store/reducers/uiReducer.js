import { initialUiState } from "../initialStates/initialUiState";
import { SET_SORTED, SET_SEARCH } from "../actions/todosActions";

export const uiReducer = (state = initialUiState, { type, payload }) => {
  switch (type) {
    case SET_SORTED:
      return { ...state, isSorted: !state.isSorted };
    case SET_SEARCH:
      return { ...state, search: payload };
    default:
      return state;
  }
};
