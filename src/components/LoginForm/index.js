import React from "react";
import Button from "../Button";
import welcomeImg from "../../assets/welcome.jpg";
import "./styles.scss";

function LoginForm() {
  return (
    <div className="loginFormContainer">
      <div
        className="leftBox"
        style={{ background: `url(${welcomeImg})` }}
      ></div>
      <div className="rightBox">
        <div className="titles">
          <h2>Login</h2>
          <h5>Please login to continue</h5>
        </div>
        <form>
          <div className="inputs">
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <span>Forgot Password ?</span>
          </div>
        </form>
        <Button title="Login" />
        <Button title="Login with Google" />
      </div>
    </div>
  );
}

export default LoginForm;
