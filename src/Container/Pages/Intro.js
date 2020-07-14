import React from "react";
import styles from "./Intro.module.css";
//import Letters from "../UI/Letters/Letters";
import Button from "../UI/Buttonn/Button";
import Card from "../UI/card/Card";
import Typo1 from "../../Component/Typo/Typo1";
import Image from "../UI/Image/Image";
import Pic from "../UI/Image/VT2.jpg";

const Intro = (props) => {
  return (
    <div className={styles.introduction}>
      <div className={styles.introTxt}>
        <Card styleType="intro">
          <div>
            <Typo1 />
            <br />
          </div>
          <Button btnType="Danger" styled={{ marginLeft: "5%" }}>
            {" "}
            Contact Me
          </Button>
        </Card>
      </div>
      <div className={styles.ProImg}>
        <Image pic={Pic} />
      </div>
    </div>
  );
};

export default Intro;

/* {" "}
            <h1>Hi ,</h1>
            <h1>
              I'm <span>Anand Tiwari</span>
            </h1>
            <h1>MERN Developer</h1>
            <p>MongoDB / ExpressJS / ReactJS / NodeJS</p>*/
