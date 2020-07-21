import React from "react";
import Auxi from "../../../hoc/Auxi/Auxi";
import "./Bar.css";

const Bar = (props) => {
  return (
    <Auxi>
      <div className="flex-container ">
        <div className="react">
          <label className="tag">React JS:</label>
          <div className="progress">
            <div
              className="value react-value"
              style={{ width: props.barWidth }}
            ></div>
          </div>
        </div>
        <div className="html">
          <label className="tag">HTML:</label>
          <div className="progress">
            <div
              className="html-value value"
              style={{ width: props.barWidth }}
            ></div>
          </div>
        </div>
        <div className="css">
          <label className="tag">CSS:</label>
          <div className="progress">
            <div
              className="css-value value"
              style={{ width: props.barWidth }}
            ></div>
          </div>
        </div>
        <div className="node">
          <label className="tag">Node JS:</label>
          <div className="progress">
            <div
              className="node-value value"
              style={{ width: props.barWidth }}
            ></div>
          </div>
        </div>
        <div className="mongo">
          <label className="tag">MongoDB:</label>
          <div className="progress">
            <div
              className="mongo-value value"
              style={{ width: props.barWidth }}
            ></div>
          </div>
        </div>
      </div>
    </Auxi>
  );
};

export default Bar;
