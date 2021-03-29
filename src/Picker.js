import React, { useState } from "react";

import Equation from "./Equation";

const Picker = () => {
  const [text, setText] = useState("");
  const [operator, setOperator] = useState("+");
  const [speed, setSpeed] = useState(1000);

  const changeSpeed = (event) => {
    setSpeed(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "33%" }}>
      {" "}
      {text}
      <button
        className="Picker"
        id="add"
        onClick={() => {
          setText("Addition");
          setOperator("+");
        }}
      >
        +
      </button>
      <button
        className="Picker"
        id="subtract"
        onClick={() => {
          setText("Subtract");
          setOperator("-");
        }}
      >
        -
      </button>
      <button
        className="Picker"
        id="mult"
        onClick={() => {
          setText("Multiply");
          setOperator("*");
        }}
      >
        *
      </button>
      <button
        className="Picker"
        id="divide"
        onClick={() => {
          setText("Divide");
          setOperator("/");
        }}
      >
        /
      </button>
      <input
        id="slider"
        type="range"
        min={1000}
        max={10000}
        step={1000}
        onChange={changeSpeed}
      />
      <Equation operation={operator} speed={speed} />
    </div>
  );
};

export default Picker;
