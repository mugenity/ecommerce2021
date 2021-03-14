import React from "react";
import Button from "../Button";
import logo2 from "../../assets/logo2.png";

import "./styles.scss";

function Subscribe() {
  return (
    <div className="subscribeContainer">
      <div className="location">
        <img src={logo2} alt="logo" />
      </div>
      <div className="subscribeForm">
        <form>
          <label>Sign up for newsletter</label>
          <div className="theInput">
            <input
              type="email"
              name="name"
              placeholder="Enter your email here"
            />
            <Button title="Subscribe ->" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
