import React from "react";
import Button from "./../Button";
import RegisterImg from "./../../assets/hero_men2.jpg";
import "./styles.scss";
import InputField from "../InputField";

function RegisterForm() {
  return (
    <div className="formContainer">
      <div
        className="leftBox"
        style={{ backgroundImage: `url(${RegisterImg}) ` }}
      ></div>
      <div className="rightBox">
        <h3>Sign In</h3>
        <div className="formWrapper">
          <form className="formBox">
            <InputField
              label="Full Name"
              type="text"
              placeHolder="text"
              iName="fname"
              required
            />
            <InputField
              label="Email"
              type="email"
              placeHolder="email"
              iName="email"
              required
            />
            <InputField
              label="Password"
              type="password"
              placeHolder="Password"
              iName="password"
              required
            />
            <InputField
              label="Confirm Password"
              type="password"
              placeHolder="Confirm Password"
              iName="password"
              required
            />
            <Button title="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
