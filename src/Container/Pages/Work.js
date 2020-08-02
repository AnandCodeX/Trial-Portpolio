import React from "react";
import Auxi from "../../hoc/Auxi/Auxi";
import styles from "./Work.module.css";
import Hnames from "../UI/designes/HeaderName/Hnames";
import BtnCard from "../UI/BttnCard/BtnCard";

import Img1 from "../../Image/Details1.jpeg";
import I1 from "../../Image/I1.jpeg";
import I2 from "../../Image/I2.jpg";
import I3 from "../../Image/I3.jpg";

import Block from "../UI/WorkBlock/Block";
import Card from "../UI/card/Card";

const Work = (props) => {
  return (
    <Auxi>
      <div className={styles.work}>
        <div className={styles.hnames}>
          <Hnames>Work</Hnames>
        </div>
        <div className={styles.workspace}>
          <div>
            <BtnCard />
          </div>
          <div className={styles.blocks}>
            <Card>
              <Block src={Img1} />
              <Block src={I1} />
              <Block src={I2} />
              <Block src={I3} />
            </Card>
          </div>
        </div>
      </div>
    </Auxi>
  );
};

export default Work;
