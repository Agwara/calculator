import React from "react";

import "./Numbers.css";
import cancel from "../../assets/cancel.svg"

const Numbers = (props) => {
  const onItemClick = (value) => {
    props.setAnswer(null)
    if (props.currentValue.length < 12) {
      let temp = [...props.currentValue, value]
      props.setCurrentValue([...temp]);
    }
  }

  const onClickPI = () => {
    props.setCurrentValue([3.142])
  }

  const addDot = () => {
    let temp = [...props.currentValue];
    if (temp.join("").includes(".")) {
      return true
    } else if (temp.length === 0) {
      temp.push("0.");
      props.setCurrentValue([...temp]);
    }
     else {
      temp.push(".");
      props.setCurrentValue([...temp]);
    }
  }

  const restartCalculator = () => {
    props.setCurrentValue([]);
    props.setOperands([]);
    props.setOperators([]);
    props.setExpression([]);
    props.setAnswer(null)
  }

  const clearCurrentValue = () => {
    props.setCurrentValue([])
  }

  const popCurrentValue = () => {
    let tempCurrentValue = [...props.currentValue]
    tempCurrentValue.pop()
    props.setCurrentValue([...tempCurrentValue]);
  }

  return (
    <div className="numbers">
      <p className="number__centerItems numbers__items" onClick={() => onItemClick("7")}>7</p>
      <p className="number__centerItems numbers__items" onClick={() => onItemClick("8")}>8</p>
      <p className="number__centerItems numbers__items" onClick={() => onItemClick("9")}>9</p>
      <p className="number__centerItems numbers__items" onClick={() => onItemClick("4")}>4</p>
      <p className="number__centerItems numbers__items" onClick={() => onItemClick("5")}>5</p>
      <p className="number__centerItems numbers__items" onClick={() => onItemClick("6")}>6</p>
      <p className="number__centerItems numbers__items" onClick={() => onItemClick("1")}>1</p>
      <p className="number__centerItems numbers__items" onClick={() => onItemClick("2")}>2</p>
      <p className="number__centerItems numbers__items" onClick={() => onItemClick("3")}>3</p>
      <p className="number__centerItems numbers__items" onClick={addDot}>.</p>
      <p className="number__centerItems numbers__items" onClick={() => onItemClick("0")}>0</p>
      <p className="number__centerItems numbers__items" onClick={onClickPI}>&#x3C0;</p>
      <p className="number__centerItems numbers__ac border--right" onClick={clearCurrentValue}>CE</p>  
      <p className="number__centerItems numbers__ac" onClick={restartCalculator}>C</p>           
      <p className="number__centerItems numbers__delete" onClick={popCurrentValue}>
        <img
          alt=""
          src={cancel}
          height="30"
          width="30" 
        />
      </p>
    </div>
  )
}

export default Numbers;