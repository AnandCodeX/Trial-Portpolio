import React, { useState } from "react";
import Auxi from "../../hoc/Auxi/Auxi";
import styles from "./Work.module.css";
import Hnames from "../UI/designes/HeaderName/Hnames";
import Bttn from "../UI/BttnCard/Bttn/Bttn";

import Img1 from "../../Image/Details1.jpeg";
import I1 from "../../Image/I1.jpeg";
import I2 from "../../Image/I2.jpg";
import I3 from "../../Image/I3.jpg";
import I4 from "../../Image/I4.jpg";

import WA1 from "../../Image/WA1.jpg";
import WA2 from "../../Image/WA2.jpg";
import WA3 from "../../Image/WA3.jpg";
import WA4 from "../../Image/WA4.jpg";

import RP1 from "../../Image/RP1.jpg";
import RP2 from "../../Image/RP2.jpg";
import RP3 from "../../Image/RP3.jpg";
import RP4 from "../../Image/RP4.jpg";
import RP5 from "../../Image/RP5.jpg";

import Block from "../UI/WorkBlock/Block";
import Card from "../UI/card/Card";

const Work = (props) => {
  const [state, setState] = useState("WD");

  const wdHandler = () => {
    setState("WD");
  };
  const waHandler = () => {
    setState("WA");
  };
  const rpHandler = () => {
    setState("RP");
  };

  const btnSwitch = state;
  let cardShow;
  if (btnSwitch === "WD") {
    cardShow = (
      <Card>
        <span>
          <Block src={Img1} />
          <Block src={I1} />
          <Block src={I2} />
          <Block src={I3} />
          <Block src={I4} />
        </span>
      </Card>
    );
  }
  if (btnSwitch === "WA") {
    cardShow = (
      <Card>
        <span>
          <Block src={WA1} />
          <Block src={WA2} />
          <Block src={WA3} />
          <Block src={WA4} />
        </span>
      </Card>
    );
  }
  if (btnSwitch === "RP") {
    cardShow = (
      <Card>
        <span>
          <Block src={RP1} />
          <Block src={RP2} />
          <Block src={RP3} />
          <Block src={RP4} />
          <Block src={RP5} />
        </span>
      </Card>
    );
  }

  /* const onClickSwitch = (event, id) => {
    if (id === "WD" && event === true) {
      return (
        <Card>
          <span>
            <Block src={Img1} />
            <Block src={I1} />
            <Block src={I2} />
            <Block src={I3} />
            <Block src={I4} />
          </span>
        </Card>
      );
    }
    if (id === "WA" && event === true) {
      return (
        <Card>
          <span>
            <Block src={WA1} />
            <Block src={WA2} />
            <Block src={WA3} />
            <Block src={WA4} />
          </span>
        </Card>
      );
    }
    if (id === "RP" && event === true) {
      return (
        <Card>
          <span>
            <Block src={RP1} />
            <Block src={RP2} />
            <Block src={RP3} />
            <Block src={RP4} />
            <Block src={RP5} />
          </span>
        </Card>
      );
    }
  };
 */
  return (
    <Auxi>
      <div className={styles.work}>
        <div className={styles.hnames}>
          <Hnames>Work</Hnames>
        </div>
        <div className={styles.workspace}>
          <div>
            <div className={styles.btnCard}>
              <div className={styles.bttn}>
                <Bttn clicked={wdHandler} id="WD">
                  Web Designing
                </Bttn>
                <Bttn clicked={waHandler} id="WA">
                  Web Animation
                </Bttn>
                <Bttn clicked={rpHandler} id="RP">
                  React Projects
                </Bttn>
              </div>
            </div>
          </div>

          <div className={styles.blocks}>{cardShow}</div>
        </div>
      </div>
    </Auxi>
  );
};

export default Work;
