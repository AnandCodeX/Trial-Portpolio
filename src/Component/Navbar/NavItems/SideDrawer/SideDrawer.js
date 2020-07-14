import React from "react";

import Logo from "../../../../Container/UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../../../Container/UI/Backdrop/Backdrop";
import Auxi from "../../../../hoc/Auxi/Auxi";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Auxi>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />{" "}
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxi>
  );
};

export default sideDrawer;
