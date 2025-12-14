import { ACTION_TYPE } from "./action-type";

export const setSearch = (search) => ({
  type: ACTION_TYPE.SET_SEARCH,
  payload: search,
});
