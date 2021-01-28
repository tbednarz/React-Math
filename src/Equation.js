import React from "react";

const Equation = ({ operation }) => {
  return (
    <div style={{ width: "500px" }}>
      <div className="equation-set" id="numOne"></div>
      <div className="equation-set" id="operation">
        {operation}
      </div>
      <div className="equation-set" id="numTwo"></div>
      <div className="equation-set" id="equals">
        =
      </div>
      <div className="equation-set" id="answer"></div>
    </div>
  );
};

export default Equation;
