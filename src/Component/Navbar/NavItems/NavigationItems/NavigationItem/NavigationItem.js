import React from "react";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a
        id={props.id}
        href={`#${props.link}`}
        style={props.style}
        className={props.active ? classes.active : null}
        onClick={() => {
          props.isOn(true, props.id);
        }}
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
