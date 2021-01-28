import React from "react";
import Equation from "./Equation";

const Picker = () => {
  const [text, setText] = React.useState("");
  const [operator, setOperator] = React.useState("+");
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
      <Equation operation={operator} />
    </div>
  );
};

export default Picker;
