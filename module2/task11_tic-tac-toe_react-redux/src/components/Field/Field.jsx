import { selectField } from "../../selectors";
import FieldLayOut from "./FieldLayout";
import { useDispatch, useSelector } from "react-redux";

const Field = () => {
  const field = useSelector(selectField);
  const dispatch = useDispatch();

  const makeMove = (index) => {
    dispatch({ type: "MAKE_MOVE", payload: { index } });
  };

  return <FieldLayOut field={field} makeMove={makeMove} />;
};

export default Field;
