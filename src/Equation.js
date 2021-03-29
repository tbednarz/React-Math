import React, { useState, useEffect } from "react";

const Equation = ({ operation, speed }) => {
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      setFirst(Math.floor(Math.random() * (100 - 0)));
      setSecond(Math.floor(Math.random() * (100 - 0)));
    }, speed);
    return () => clearInterval(interval);
  }, [speed]);

  const sum = (operation) => {
    switch (operation) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "*":
        return first * second;
      case "/":
        return first / second;

      default:
        break;
    }
  };

  return (
    <div style={{ width: "500px" }}>
      <div className="equation-set" id="numOne">
        {first}
      </div>
      <div className="equation-set" id="operation">
        {operation}
      </div>
      <div className="equation-set" id="numTwo">
        {second}
      </div>
      <div className="equation-set" id="equals">
        =
      </div>
      <div className="equation-set" id="answer">
        {sum(operation)}
      </div>
    </div>
  );
};

export default Equation;
