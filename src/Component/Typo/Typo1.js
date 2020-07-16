import React from "react";

import Auxi from "../../hoc/Auxi/Auxi";
import "./Typo1.css";
import Abt from "../../Container/UI/Letters/Alphabet/Alphabet";

const Typo1 = (props) => {
  return (
    <Auxi>
      <div>
        <span className="typo1">
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>H</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>i</Abt>
          <Abt style={{ paddingLeft: "10px" }}>{"  "}</Abt>
        </span>
        <span className="typo1">
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>,</Abt>
        </span>
      </div>
      <div>
        <span className="typo1">
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>I</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>'</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>m</Abt>
        </span>
        <span className="Name">
          <Abt style={{ paddingLeft: "20px" }}>{"  "}</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>A</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>n</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>a</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>n</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>d</Abt>
          <Abt style={{ paddingLeft: "10px" }}>{"  "}</Abt>
        </span>
        <span className="Name">
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>T</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>i</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>w</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>a</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>r</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>i</Abt>
        </span>
      </div>
      <div>
        <span className="typo1">
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>M</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>E</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>R</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>N</Abt>
        </span>
        <span className="typo1">
          <Abt style={{ paddingLeft: "10px" }}>{"  "}</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>D</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>e</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>v</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>e</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>l</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>o</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>p</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>e</Abt>
          <Abt style={{ fontSize: "inherit", color: "inherit" }}>r</Abt>
        </span>
        <p>MongoDB / ExpressJS / ReactJS / NodeJS</p>
      </div>
    </Auxi>
  );
};

export default Typo1;
