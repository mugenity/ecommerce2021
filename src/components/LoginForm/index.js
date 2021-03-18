import React, { Component } from "react";
import InputField from "../InputField";
import Button from "../Button";
import welcomeImg from "../../assets/welcome.jpg";
import { signInWithGoogle } from "./../../firebase/utils";

import "./styles.scss";

class LoginForm extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="loginFormContainer">
        <div
          className="leftBox"
          style={{ backgroundImage: `url(${welcomeImg})` }}
        ></div>
        <div className="rightBox">
          <div className="titles">
            <h2>Login</h2>
            <h5>Please login to continue</h5>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              <InputField type="email" placeHolder="Email" required />
              <InputField type="password" placeHolder="Password" required />
              <span>Forgot Password ?</span>
            </div>
            <Button title="Login" />
            <Button onClick={signInWithGoogle} title="Login with Google" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
