import { Component } from "react";

class InformacionLayOut extends Component {
  render() {
    const { status, result } = this.props;

    let className = "mb-5 text-2xl font-semibold text-center";

    if (status === "win") className += " text-green-500";
    else if (status === "draw") className += " text-yellow-400";
    else className += " text-white";

    return <div className={className}>{result}</div>;
  }
}

export default InformacionLayOut;
