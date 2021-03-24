import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  signInUser,
  signInWithGoogle,
  resetAllAuthForms,
} from "./../../redux/User/user.actions";

import InputField from "../InputField";
import Button from "../Button";
import welcomeImg from "../../assets/welcome.jpg";

import "./styles.scss";

//1. Distruct user object from the rooter reducer then return an object of signSuccess that you will find (rootReducer user).(signInSuccess) from the state
const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const { signInSuccess } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      props.history.push("/");
    }
  }, [signInSuccess]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  };

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
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <InputField
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              required
            />
            <InputField
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              required
            />
            <Link to="/recovery">Forgot Password ?</Link>
          </div>
          <Button title="Login" />
          <Button
            type="submit"
            onClick={handleGoogleSignIn}
            title="Login with Google"
          />
        </form>
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
