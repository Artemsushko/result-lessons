import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ACTION_TYPE } from "../store/actions";

export const useResetForm = (wasLogout, reset) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (wasLogout) {
      reset();
      dispatch({ type: ACTION_TYPE.LOGOUT });
    }
  }, [wasLogout, reset, dispatch]);
};
