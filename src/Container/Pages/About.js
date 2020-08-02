import React from "react";
import Auxi from "../../hoc/Auxi/Auxi";
import styles from "./About.module.css";
import Hnames from "../UI/designes/HeaderName/Hnames";
import Dots from "../UI/designes/dots/Dots";
import Card from "../UI/card/Card";


const About = (props) => {
  return (
    <Auxi>
      <div
        id={props.id}
        className={styles.About}
        onLoad={() => props.handleClick(props.id)}
      >
        <div className={styles.content}>
          <div className={styles.Hnames}>
            <Hnames>About</Hnames>
          </div>
          <div className={styles.Card}>
            <Card>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti ex culpa numquam fuga nulla eveniet illo minima?
                Expedita sed nostrum sint libero consequuntur beatae, porro,
                quis ratione inventore eos facilis illum hic rerum! Quibusdam,
                cum qui. Ut voluptatem sunt nesciunt aspernatur sit, officia
                quasi eos eveniet magnam, quas doloremque suscipit. Ratione
                molestiae laborum numquam error esse fugiat nostrum est
                distinctio.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti ex culpa numquam fuga nulla eveniet illo minima?
                Expedita sed nostrum sint libero consequuntur beatae, porro,
                quis ratione inventore eos facilis illum hic rerum! Quibusdam,
                cum qui.
              </p>
            </Card>
          </div>
          <div className={styles.Dots}>
            <Dots />
          </div>
        </div>
      </div>
    </Auxi>
  );
};

export default About;
