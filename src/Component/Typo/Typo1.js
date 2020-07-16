import React from "react";

import Auxi from "../../hoc/Auxi/Auxi";
import "./Typo1.css";
import Abt from "../../Container/UI/Letters/Alphabet/Alphabet";

const Typo1 = (props) => {
  return (
    <Auxi>
      <div>
        <span className="typo1">
          {" "}
          <Abt style={{ fontSize: "inherit", color: "white" }}>H</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>i</Abt>
          <Abt style={{ paddingLeft: "10px" }}>{"  "}</Abt>
        </span>
        <span className="typo1">
          {" "}
          <Abt style={{ fontSize: "inherit", color: "white" }}>,</Abt>
        </span>
      </div>
      <div>
        {" "}
        <span className="typo1">
          {" "}
          <Abt style={{ fontSize: "inherit", color: "white" }}>I</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>'</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>m</Abt>
        </span>
        <span className="Name">
          <Abt style={{ paddingLeft: "10px" }}>{"  "}</Abt>
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            A
          </Abt>
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            n
          </Abt>
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            a
          </Abt>
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            n
          </Abt>
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            d
          </Abt>
          <Abt style={{ paddingLeft: "10px" }}>{"  "}</Abt>
        </span>
        <span className="Name">
          {" "}
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            T
          </Abt>
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            i
          </Abt>
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            w
          </Abt>
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            a
          </Abt>
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            r
          </Abt>
          <Abt style={{ fontSize: "inherit", color: "rgb(255, 136, 0)" }}>
            i
          </Abt>
        </span>
      </div>
      <div>
        <span className="typo1">
          {" "}
          <Abt style={{ fontSize: "inherit", color: "white" }}>M</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>E</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>R</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>N</Abt>
        </span>
        <span className="typo1">
          {" "}
          <Abt style={{ paddingLeft: "10px" }}>{"  "}</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>D</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>e</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>v</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>e</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>l</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>o</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>p</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>e</Abt>
          <Abt style={{ fontSize: "inherit", color: "white" }}>r</Abt>
        </span>
        <p>MongoDB / ExpressJS / ReactJS / NodeJS</p>
      </div>
    </Auxi>
  );
};

export default Typo1;
