import React from "react";
import Auxi from "../../../../hoc/Auxi/Auxi";

import styles from "./Hnames.module.css";

const Hnames = (props) => {
  return (
    <Auxi>
      <div className={styles.hnames} style={props.inStyle}>
        <span>{props.children}</span>
      </div>
    </Auxi>
  );
};

export default Hnames;
