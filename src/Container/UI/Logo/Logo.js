import React from "react";

import Logo from "./family-logo.jpg";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={Logo} alt="Toogler" />
  </div>
);

export default logo;
