import React, { useState } from "react";
import { Consumer } from "../../../../context/Context";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Auxi from "../../../../hoc/Auxi/Auxi";
import About from "../../../../Container/Pages/About";

const NavigationItems = (props) => {
  const [state, setState] = useState({
    about: false,
    skills: false,
    work: false,
    contact: false,
  });

  const activated = (event, id) => {
    if (id === "ABOUT" && event===true) {
      setState({ about: true,skills:false,work:false,contact:false });
    }
    if (id === "SKILLS" && event === true) {
      setState({ about: false, skills: true, work: false, contact: false });
    }
    if (id === "WORK" && event === true) {
      setState({ about: false, skills: false, work: true, contact: false });
    }
    if (id === "CONTACT" && event === true) {
      setState({ about: false, skills: false, work: false, contact: true });
    }
  };

  return (
    <Auxi>
      <Consumer>
        {(allID) => (
          <div>
            <ul className={classes.NavigationItems}>
              <NavigationItem
                id="ABOUT"
                active={state.about}
                link={allID.about}
                isOn={activated}
              >
                ABOUT
              </NavigationItem>
              <NavigationItem
                id="SKILLS"
                active={state.skills}
                link={allID.skills}
                isOn={activated}
              >
                SKILLS
              </NavigationItem>
              <NavigationItem
                id="WORK"
                active={state.work}
                link={allID.work}
                isOn={activated}
              >
                WORK
              </NavigationItem>
              <NavigationItem
                id="CONTACT"
                active={state.contact}
                link={allID.contact}
                isOn={activated}
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
