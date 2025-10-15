import FieldLayOut from "./FieldLayout";
import { useReduxStore } from "../hooks/useReduxStore";

const Field = () => {
  const { state, dispatch } = useReduxStore();
  const makeMove = (index) => {
    dispatch({ type: "MAKE_MOVE", payload: { index } });
  };

  return <FieldLayOut field={state.field} makeMove={makeMove} />;
};

export default Field;
