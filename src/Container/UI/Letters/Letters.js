import React from "react";
import Auxi from "../../../hoc/Auxi/Auxi";
import Alphabet from "./Alphabet/Alphabet";

const Letters = (props) => {
  return (
    <Auxi>
      <span>
        <Alphabet>{props.children}</Alphabet>{" "}
      </span>
    </Auxi>
  );
};

export default Letters;
