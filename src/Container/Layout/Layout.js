import React from "react";

import Auxi from "../../hoc/Auxi/Auxi";
import styles from "./Layout.module.css";
import Navbar from "../../Component/Navbar/Navbar";
import Intro from "../Pages/Intro";
import About from "../Pages/About";
import Skills from "../Pages/skills";
import Work from "../Pages/Work";
import { Provider } from "../../context/Context";
import Contact from "../Pages/Contact";

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
        <div id={allID.about} className={styles.aboutCall}>
          <About />
        </div>
        <div id={allID.skills} className={styles.skillsCall}>
          <Skills />
        </div>
        <div id={allID.work} className={styles.workCall}>
          <Work />
        </div>
        <div id={allID.contact} className={styles.contactCall}>
          <Contact />
        </div>
        <div className={styles.line}>
          <hr />
          <p>Thank you for Visiting ... </p>
        </div>
      </div>
    </Auxi>
  );
};

export default Layout;
