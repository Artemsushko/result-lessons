import InformacionLayOut from "./InformacionLayOut";
import { useReduxStore } from "../hooks/useReduxStore";

const Informacion = () => {
  const { state } = useReduxStore();
  const { currentPlayer, isGameEnded, isDraw } = state;
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
