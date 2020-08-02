import React, { useState } from "react";
import { Consumer } from "../../../../context/Context";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Auxi from "../../../../hoc/Auxi/Auxi";

const NavigationItems = (props) => {
  const [state, setState] = useState(false);
  const activatedAbout = (event) => {
    event === true ? setState(true) : setState(false);
  };
  const activatedSkills = (event) => {
    event === true ? setState(true) : setState(false);
  };
  const activatedWork = (event) => {
    event === true ? setState(true) : setState(false);
  };
  const activatedContact = (event) => {
    event === true ? setState(true) : setState(false);
  };
  return (
    <Auxi>
      <Consumer>
        {(allID) => (
          <div>
            <ul className={classes.NavigationItems}>
              <NavigationItem
                active={state}
                link={allID.about}
                isOn={activatedAbout}
              >
                ABOUT
              </NavigationItem>
              <NavigationItem
                active={state}
                link={allID.skills}
                isOn={activatedSkills}
              >
                SKILLS
              </NavigationItem>
              <NavigationItem
                active={state}
                link={allID.work}
                isOn={activatedWork}
              >
                WORK
              </NavigationItem>
              <NavigationItem
                active={state}
                link={allID.contact}
                isOn={activatedContact}
              >
                CONTACT
              </NavigationItem>
            </ul>
          </div>
        )}
      </Consumer>
    </Auxi>
  );
};

export default NavigationItems;
