import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import backgroundImg from "../../assets/grid-image2.jpg";
import InputField from "../InputField";
import Button from "../Button";
import "./styles.scss";

import { auth } from "./../../firebase/utils";

const RecoveryForm = (props) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: "",
  //     errors: [],
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange = (e) => {
  //   const { name, value } = e.target;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const { email } = this.state;

      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found please try again"];

          setErrors(err);
        });
    } catch (err) {
      // console.log(err)
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <InputField
              onChange={(e) => setEmail(e.target.value)}
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
};

export default withRouter(RecoveryForm);
