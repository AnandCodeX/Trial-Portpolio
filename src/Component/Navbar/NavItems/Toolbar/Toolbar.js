import React from "react";

import classes from "./Toolbar.module.css";

import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";


const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <NavigationItem
      className="patch"
      style={{
        fontSize: "18px",
        marginLeft: "20px",
      }}
      link="/"
      active
    >
      Anand
    </NavigationItem>
    
    <div className={classes.Logo}></div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
