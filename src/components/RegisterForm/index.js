import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "./../Button";
import RegisterImg from "./../../assets/hero_men2.jpg";
import "./styles.scss";
import { auth, handleUserProfile } from "./../../firebase/utils";
import InputField from "../InputField";

// const initialState = {
//   displayName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
//   errors: [],
// };

const RegisterForm = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     ...initialState,
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(e) {
  //   const { name, value } = e.target;

  //   this.setState({
  //     [name]: value,
  //   });
  // }

  const resetFields = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      const err = ["Password Don't match"];
      // this.setState({
      //   errors: err,
      // });
      setErrors(err);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });

      // this.setState({
      //   ...initialState,
      // });
      resetFields();
      props.history.push("/");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <div className="formContainer">
      <div
        className="leftBox"
        style={{ backgroundImage: `url(${RegisterImg}) ` }}
      ></div>
      <div className="rightBox">
        <h3>Sign In</h3>
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}
        <div className="formWrapper">
          <form onSubmit={handleFormSubmit} className="formBox">
            <InputField
              label="Full Name"
              type="text"
              placeholder="Name"
              name="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
            <InputField
              label="Email"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Button type="submit" title="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RegisterForm);
