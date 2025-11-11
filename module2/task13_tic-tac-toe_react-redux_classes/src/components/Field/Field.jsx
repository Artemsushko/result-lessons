import { Component } from "react";
import { selectField } from "../../selectors";
import FieldLayOut from "./FieldLayout";
import { connect } from "react-redux";

export class FieldContainer extends Component {
  constructor(props) {
    super(props);
    this.makeMove = this.makeMove.bind(this);
  }

  makeMove(index) {
    this.props.makeMove(index);
  }

  render() {
    const { field } = this.props;

    return <FieldLayOut field={field} makeMove={this.makeMove} />;
  }
}

const mapStateToProps = (state) => ({
  field: selectField(state),
});

const mapDispatchToProps = (dispatch) => ({
  makeMove: (index) => dispatch({ type: "MAKE_MOVE", payload: { index } }),
});

const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);

export default Field;
