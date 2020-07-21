import React from "react";
import Auxi from "../../hoc/Auxi/Auxi";
import styles from "./Work.module.css";
import Hnames from "../UI/designes/HeaderName/Hnames";
import BtnCard from "../UI/BttnCard/BtnCard";
import Card from "../UI/card/Card";
import Img1 from "../../Image/Details1.jpeg";

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
          <div className={styles.cardBody}>
            <Card>
              <article className={styles.room}>
                <div className={styles.imgContainer}>
                  <img
                    src={Img1}
                    className="img-thumbnail"
                    alt="design websites"
                  />
                </div>
              </article>
            </Card>
          </div>
        </div>
      </div>
    </Auxi>
  );
};

export default Work;
