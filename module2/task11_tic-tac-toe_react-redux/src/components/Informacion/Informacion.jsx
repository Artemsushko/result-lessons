import InformacionLayOut from "./InformacionLayOut";
import {
  selectCurrentPlayer,
  selectIsDraw,
  selectIsGameEnded,
} from "../../selectors";
import { useSelector } from "react-redux";

const Informacion = () => {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const isDraw = useSelector(selectIsDraw);

  let result = null;
  let status = null;
  if (isDraw) {
    result = "Ничья";
    status = "draw";
  } else if (isGameEnded) {
    result = `Победа: ${currentPlayer}`;
    status = "win";
  } else result = `Ходит: ${currentPlayer}`;

  return <InformacionLayOut result={result} status={status} />;
};

export default Informacion;
