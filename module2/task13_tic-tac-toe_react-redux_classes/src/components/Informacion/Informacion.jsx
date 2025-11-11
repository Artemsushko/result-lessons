import InformacionLayOut from "./InformacionLayOut";
import {
  selectCurrentPlayer,
  selectIsDraw,
  selectIsGameEnded,
} from "../../selectors";
import { connect } from "react-redux";
import { Component } from "react";

class InformacionContainer extends Component {
  render() {
    const { isDraw, isGameEnded, currentPlayer } = this.props;

    let result = "";
    let status = "";

    if (isDraw) {
      result = "Ничья";
      status = "draw";
    } else if (isGameEnded) {
      result = `Победа: ${currentPlayer}`;
      status = "win";
    } else result = `Ходит: ${currentPlayer}`;
    return <InformacionLayOut result={result} status={status} />;
  }
}

const mapStateToProps = (state) => ({
  currentPlayer: selectCurrentPlayer(state),
  isGameEnded: selectIsGameEnded(state),
  isDraw: selectIsDraw(state),
});

const Informacion = connect(mapStateToProps)(InformacionContainer);
export default Informacion;
