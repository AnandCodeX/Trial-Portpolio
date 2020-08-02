import React from "react";
import styles from "./Block.module.css";

import Card from "../card/Card";
import Modal from "../Modal/Modal";

const Block = (props) => {
  const clickedHandler = (event) => {
    return (
      <Modal show="true" modalClosed="false">
        <div>
          <img src={props.src} className="imgModal" alt="imgModal" />
        </div>
      </Modal>
    );
  };

  return (
    <div className={styles.cardBody}>
      <Card>
        <article className={styles.room}>
          <div className={styles.imgContainer}>
            <img
              src={props.src}
              className="img-thumbnail"
              alt="design websites"
              onClick={clickedHandler}
            />
          </div>
        </article>
      </Card>
    </div>
  );
};

export default Block;
