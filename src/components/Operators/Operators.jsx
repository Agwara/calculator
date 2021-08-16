import React from "react";

import "./Operators.css";

const Operators = (props) => {
  const updateExpression = (operator) => {
    if (props.expression.length > 15) {
      return true
    }
    else if (props.currentValue.length > 0) {
      let tempOperands = [...props.operands, props.currentValue.join("")];
      let tempOperators = [...props.operators, props.operator];
      props.setOperands([...tempOperands]);
      props.setOperators([...tempOperators]);
      props.setExpression([...props.expression, props.currentValue.join(""), operator])

      // Clear the current value after updating the expression
      props.setCurrentValue([]);
    }
    else if ((props.currentValue.length === 0) && (props.operators.length > 0)) {
      let tempNewOperators = [...props.operators];
      tempNewOperators.pop();
      tempNewOperators.push(operator);
      let tempExpression = [...props.expression];
      tempExpression.pop();
      tempExpression.push(operator);
      props.setExpression([...tempExpression])
    } 

    else if (props.answer) {
      props.setExpression([...props.expression, props.answer, operator])
      props.setOperands([...props.operands, props.answer]);
      props.setOperators([...props.operators, operator])
      props.setAnswer(null)
    }
  }

  const calculateResult = () => {
    let firstOperand, initOperator
    props.expression.map((currentValue, currentIndex) => {
      if (currentIndex === 0) {
        firstOperand = currentValue;
      } else if (isNaN(currentValue)) {
        initOperator = currentValue;
      } else if (!isNaN(currentValue)) {
        firstOperand = props.runComputation(Number(firstOperand), Number(currentValue), initOperator);
      } if (currentIndex === (props.expression.length - 1)) {
        firstOperand = props.runComputation(Number(firstOperand), Number(props.currentValue.join("")), initOperator);
      }
      return true
    })
    props.setExpression([]);
    props.setOperators([])
    props.setOperands([])
    props.setCurrentValue([])
    props.setAnswer(firstOperand);
  }

  return (
    <div className="operators">
      <p className="operators__default" onClick={() => updateExpression("÷")}>÷</p>
      <p className="operators__default" onClick={() => updateExpression("-")}>-</p>
      <p className="operators__default" onClick={() => updateExpression("+")}>+</p>
      <p className="operators__default" onClick={() => updateExpression("x")}>x</p>
      <p className="operators__equals" onClick={calculateResult}>=</p>
    </div>
  )
}

export default Operators;
