import React from "react";
import Auxi from "../../../hoc/Auxi/Auxi";
import Bttn from "./Bttn/Bttn";
import styles from "./BtnCard.module.css";

const BtnCard = (props) => {
  return (
    <Auxi>
      <div className={styles.btnCard}>
        <div className={styles.bttn}>
          <Bttn clicked={props.onClickBtn} >Web Designing</Bttn>
          <Bttn clicked={props.onClickBtn} >Web Animation</Bttn>
          <Bttn clicked={props.onClickBtn} >React Projects</Bttn>
        </div>
      </div>
    </Auxi>
  );
};

export default BtnCard;
