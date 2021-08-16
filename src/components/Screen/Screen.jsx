import React from "react";

import "./Screen.css";

const Screen = (props) => {
  return (
    <div className="screen">
      <div className="screen__expression">
        {
          props.expression.length > 0 ? 
          props.expression.map((element, i) => <p key={`${i}${element}`}>{element}</p>) : <div></div>
        }
      </div>

      <div className="screen__currentvalue">
        {
          props.answer ? <p>{props.answer}</p> : <p>{props.currentValue.length > 0 ? props.currentValue.join("") : 0}</p>
        }
      </div>
    </div>
  )
}

export default Screen;