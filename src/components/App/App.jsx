import React, {useState} from "react";

import Numbers from "../Numbers/Numbers";
import Operators from "../Operators/Operators";
import Screen from "../Screen/Screen";

import "./App.css";

const App = () => {
  const [answer, setAnswer] = useState(null);
  const [currentValue, setCurrentValue] = useState([]);   // This variable holds the currentValue in the screen
                                                          // display

  const [operands, setOperands] = useState([]);           // This variable holds the list of operands
  const [operators, setOperators] = useState([]);       // This variable holds the list of operators
  const [expression, setExpression] = useState([]);

  
  const runComputation = (firstOp, secondOp, operator) => {
    switch (operator) {
      case "÷":
        return firstOp / secondOp;
      case "-":
        return firstOp - secondOp;
      case "+":
        return firstOp + secondOp;
      case "x":
        return firstOp * secondOp;    
      default:
        return 0;  
    }
  }

  return (
    <div className="app-container">
      <Screen
        operands={operands}
        operators={operators}
        answer={answer}
        expression={expression}
        currentValue={currentValue}
      />

      <Numbers
        currentValue={currentValue}
        expression={expression}
        setCurrentValue={setCurrentValue}
        setOperands={setOperands}
        setOperators={setOperators}
        setExpression={setExpression}
        runComputation={runComputation}
        setAnswer={setAnswer}
      />

      <Operators
        answer={answer}
        expression={expression}
        operators={operators}
        operands={operands}
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
        setOperands={setOperands}
        setOperators={setOperators}
        setExpression={setExpression}
        runComputation={runComputation}
        setAnswer={setAnswer}
      />
    </div>
  )
}

export default App;