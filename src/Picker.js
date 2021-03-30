import React, { useState } from "react";
import "./picker.css";

import Equation from "./Equation";

const Picker = () => {
  const [text, setText] = useState("");
  const [operator, setOperator] = useState("+");
  const [speed, setSpeed] = useState(1000);

  const changeSpeed = (event) => {
    setSpeed(event.target.value);
  };

  return (
    <div className="picker-box">
      {" "}
      {text}
      <div className="button-box">
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
      </div>
      <input
        id="slider"
        type="range"
        min={1000}
        max={10000}
        onChange={changeSpeed}
      />
      slower ----- faster
      <Equation operation={operator} speed={speed} />
    </div>
  );
};

export default Picker;
