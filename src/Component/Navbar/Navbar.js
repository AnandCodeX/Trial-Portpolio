import React, { Component } from "react";
import Auxi from "../../hoc/Auxi/Auxi";
//import NavigationItems from "./NavItems/NavigationItems/NavigationItems";
import "./Navbar.css";
import Toolbar from "../../Component/Navbar/NavItems/Toolbar/Toolbar";
import SideDrawer from "../../Component/Navbar/NavItems/SideDrawer/SideDrawer";

class Navbar extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxi>
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
          intro={this.props.intro}
         
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
      </Auxi>
    );
  }
}

export default Navbar;
