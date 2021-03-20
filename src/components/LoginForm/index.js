import React, { Component } from "react";
import InputField from "../InputField";
import Button from "../Button";
import welcomeImg from "../../assets/welcome.jpg";
import { signInWithGoogle, auth } from "./../../firebase/utils";

import "./styles.scss";

const initialState = {
  email: "",
  password: "",
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        ...initialState,
      });
    } catch (err) {
      // console.log(err);
    }
  };

  render() {
    const { email, password } = this.state;

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
              <InputField
                onChange={this.handleChange}
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                required
              />
              <InputField
                onChange={this.handleChange}
                type="password"
                name="password"
                value={password}
                placeHolder="Password"
                required
              />
              <span>Forgot Password ?</span>
            </div>
            <Button title="Login" />
            <Button
              type="submit"
              onClick={signInWithGoogle}
              title="Login with Google"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
