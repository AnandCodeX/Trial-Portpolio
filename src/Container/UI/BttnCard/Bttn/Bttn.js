import React from "react";

import styles from "./Bttn.module.css";

const Bttn = (props) => {
  return (
    <button
      type="button"
      onClick={props.clicked}
      className={[styles.Button, styles[props.btnType]].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Bttn;
