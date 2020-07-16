import React from "react";
import Auxi from "../../hoc/Auxi/Auxi";
import styles from "./Layout.module.css";
import Navbar from "../../Component/Navbar/Navbar";
import Intro from "../Pages/Intro";
import About from "../Pages/About";

const Layout = (props) => {
  return (
    <Auxi>
      <div className={styles.Layout}>
        <Navbar />
        <Intro />
        <About />
      </div>
    </Auxi>
  );
};

export default Layout;
