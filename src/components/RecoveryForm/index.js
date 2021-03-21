import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import backgroundImg from "../../assets/grid-image2.jpg";
import InputField from "../InputField";
import Button from "../Button";
import "./styles.scss";

import { auth } from "./../../firebase/utils";

class RecoveryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      errors: [],
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

    try {
      const { email } = this.state;

      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found please try again"];

          this.setState({
            errors: err,
          });
        });
    } catch (err) {
      // console.log(err)
    }
  };

  render() {
    const { email, errors } = this.state;

    return (
      <div className="loginFormContainer">
        <div
          className="leftBox"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        ></div>
        <div className="rightBox">
          <div className="titles">
            <h2>Reset your password here.</h2>
            {errors.length > 0 && (
              <ul>
                {errors.map((error, index) => {
                  return <li key={index}>{error}</li>;
                })}
              </ul>
            )}
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              <InputField
                onChange={this.handleChange}
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email to get the step for reset"
                required
              />
            </div>
            <Button type="submit" title="Email Password" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(RecoveryForm);
