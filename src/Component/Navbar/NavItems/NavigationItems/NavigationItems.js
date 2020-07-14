import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Auxi from "../../../../hoc/Auxi/Auxi";

const navigationItems = () => {
  return (
    <Auxi>
      <div>
        <ul className={classes.NavigationItems}>
          <NavigationItem link="/">ABOUT</NavigationItem>
          <NavigationItem link="/">SKILLS</NavigationItem>
          <NavigationItem link="/">WORK</NavigationItem>
          <NavigationItem link="/">CONTACT</NavigationItem>
        </ul>
      </div>
    </Auxi>
  );
};

export default navigationItems;
