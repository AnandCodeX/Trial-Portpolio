import React from "react";
import Auxi from "../../hoc/Auxi/Auxi";
import "./Contact.css";
import Button from "../UI/Buttonn/Button";
import Hnames from "../UI/designes/HeaderName/Hnames";

const Contact = (props) => {
  return (
    <Auxi>
      <div className="contact">
        <div className="hnames">
          <Hnames>Contact</Hnames>
        </div>
        <div className="contactForm">
          <input
            className="formControl"
            type="text"
            placeholder="Full Name"
            id="Name"
          />
          <input
            className="formControl"
            type="email"
            placeholder="Email"
            id="Email"
          />
          <input
            className="formControl"
            type="email"
            placeholder="PortfolioProfileEmail@example.com"
            id="portfolioEmail"
          />
          <textarea
            className="formControl"
            type="textarea"
            placeholder="Message"
            id="Placeholder"
          />
          <span className="contactSubmitBtn">
            <Button btnType="Danger" styled={{ width: "150px" }}>
              Submit
            </Button>
          </span>
        </div>
      </div>
    </Auxi>
  );
};

export default Contact;
