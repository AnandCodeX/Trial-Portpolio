import React from "react";
import Bar from "../UI/Progressbar/Bar";
import styles from "./Skills.module.css";
import Auxi from "../../hoc/Auxi/Auxi";
import Hnames from "../UI/designes/HeaderName/Hnames";

const skills = (props) => {
  return (
    <Auxi>
      <div className={styles.skills}>
        <div className={styles.hnames}>
          <Hnames>Skills</Hnames>
        </div>
        <div className={styles.data}>
          <div className={styles.center}>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                fuga aliquam itaque nostrum sit maiores distinctio nobis dolorem
                accusamus sequi dolor quam, accusantium quo, est magni odio.
                Eius tempora ducimus iste dolorum, aspernatur optio veniam eos
                veritatis aperiam similique odit explicabo! Dolorem cumque
                veniam, vel totam odit ullam rem, blanditiis, vero minima nam
                aliquid tempore adipisci labore quos eos unde!
              </p>
            </div>
            <div className={styles.bar}>
              <Bar />
            </div>
          </div>
        </div>
      </div>
    </Auxi>
  );
};

export default skills;
