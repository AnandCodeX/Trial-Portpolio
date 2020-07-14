import React from "react";
import style from "./Alphabet.module.css";

const Alphabet = (props) => {
  return (
    <span className={style.alphabet} style={props.style}>
      {props.children}
    </span>
  );
};

export default Alphabet;
