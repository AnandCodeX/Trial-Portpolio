import React from "react";


import Auxi from "../../../hoc/Auxi/Auxi";
import styles from "./Image.module.css";

const image = (props) => {
  return (
    <Auxi>
      <div className={styles.profilePic}>
        <img className="img" src={props.pic} alt="ProfilePic" />
      </div>
    </Auxi>
  );
};

export default image;
