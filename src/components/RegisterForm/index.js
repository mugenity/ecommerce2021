import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, resetAllAuthForms } from "./../../redux/User/user.actions";

import { withRouter } from "react-router-dom";
import Button from "./../Button";
import RegisterImg from "./../../assets/hero_men2.jpg";
import InputField from "../InputField";
import "./styles.scss";

const mapState = ({ user }) => ({
  signUpSuccess: user.signUpSuccess,
  signUpError: user.signUpError,
});

const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const { signUpSuccess, signUpError } = useSelector(mapState);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (signUpSuccess) {
      resetFields();
      dispatch(resetAllAuthForms());
      props.history.push("/");
    }
  }, [signUpSuccess]);

  useEffect(() => {
    if (Array.isArray(signUpError) && signUpError.length > 0) {
      setErrors(signUpError);
    }
  }, [signUpError]);

  const resetFields = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(signUpUser({ displayName, email, password, confirmPassword }));
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
