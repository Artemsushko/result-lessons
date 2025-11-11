import Informacion from "../Informacion/Informacion";
import Field from "../Field/Field";
import ResetButton from "./ResetButton/ResetButton";
import { Component } from "react";

class Game extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen gap-5">
          <Informacion />
          <Field />
          <ResetButton />
        </div>
      </>
    );
  }
}

export default Game;
