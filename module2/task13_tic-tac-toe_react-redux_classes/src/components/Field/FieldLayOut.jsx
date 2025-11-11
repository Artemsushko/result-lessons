import { Component } from "react";

class FieldLayOut extends Component {
  render() {
    const { field, makeMove } = this.props;
    return (
      <div className="grid grid-cols-3 gap-[5px] mb-5">
        {field.map((btn, index) => (
          <button
            onClick={() => makeMove(index)}
            key={index}
            className={`
            flex items-center justify-center
            w-[100px] h-[100px]
            text-[2.5rem] font-bold text-gray-800
            bg-white border-2 border-gray-800
            transition-colors duration-200
            ${
              btn
                ? "cursor-not-allowed bg-gray-100"
                : "cursor-pointer hover:bg-gray-200"
            }
          `}
          >
            {btn}
          </button>
        ))}
      </div>
    );
  }
}

export default FieldLayOut;
