import React /* , { useState } */ from "react";

import Auxi from "../../hoc/Auxi/Auxi";
import styles from "./Layout.module.css";
import Navbar from "../../Component/Navbar/Navbar";
import Intro from "../Pages/Intro";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Work from "../Pages/Work";
import { Provider } from "../../context/Context";

const Layout = (props) => {
  const allID = {
    intro: "intro",
    about: "about",
    work: "work",
    skills: "skills",
    contact: "contact",
  };

  return (
    <Auxi>
      <div className={styles.Layout}>
        <Provider value={allID}>
          <Navbar intro={allID.intro} />
        </Provider>
        <div id={allID.intro}>
          <Intro />
        </div>
        <div id={allID.about} /* {allID.about} */>
          <About />
        </div>
        <div id={allID.skills}>
          <Skills />
        </div>
        <div id={allID.work}>
          <Work />
        </div>
      </div>
    </Auxi>
  );
};

export default Layout;
