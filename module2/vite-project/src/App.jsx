import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  const viteImg = React.createElement("img", {
    src: viteLogo,
    className: "logo",
    alt: "Vite Logo",
  });
  const viteLink = React.createElement("a", { target: "_blank" }, viteImg);

  const reactImg = React.createElement("img", {
    src: reactLogo,
    className: "logo react",
    alt: "React Logo",
  });
  const reactLink = React.createElement("a", { target: "_blank" }, reactImg);
  const logosContainer = React.createElement("div", null, viteLink, reactLink);

  const title = React.createElement("h1", null, "Vite + React");

  const countBtn = React.createElement(
    "button",
    { onClick: countHandler },
    `count is ${count}`
  );

  const editHint = React.createElement(
    "p",
    null,
    "Edit",
    React.createElement("code", null, "src/App.jsx"),
    "and save to test HMR"
  );

  const cardContainer = React.createElement(
    "div",
    { className: "card" },
    countBtn,
    editHint
  );

  const docsLink = React.createElement(
    "p",
    { className: "read-the-docs" },
    " Click on the Vite and React logos to learn more"
  );

  const currentYear = React.createElement(
    "p",
    null,
    `${new Date().getFullYear()}`
  );

  return React.createElement(
    React.Fragment,
    null,
    logosContainer,
    title,
    cardContainer,
    docsLink,
    currentYear
  );
}

export default App;
