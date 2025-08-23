import FieldLayOut from "./FieldLayout";

const Field = ({ field, handleMove }) => {
  const makeMove = (index) => {
    handleMove(index);
  };

  return <FieldLayOut field={field} makeMove={makeMove}></FieldLayOut>;
};

export default Field;
