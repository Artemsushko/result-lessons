import { Component } from "react";

import { connect } from "react-redux";

class ResetButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame() {
    this.props.resetGame();
  }

  render() {
    return (
      <button
        className="
    px-5 py-2.5
    text-base
    rounded-lg
    bg-gray-500 text-white
    cursor-pointer
    transition-colors duration-300
    hover:bg-gray-600
  "
        onClick={this.resetGame}
      >
        Начать сначала
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch({ type: "RESET_GAME" }),
});

const ResetButton = connect(null, mapDispatchToProps)(ResetButtonContainer);

export default ResetButton;
