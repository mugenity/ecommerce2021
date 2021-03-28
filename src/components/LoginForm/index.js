import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  emailSignInStart,
  signInWithGoogleStart,
} from "./../../redux/User/user.actions";

import InputField from "../InputField";
import Button from "../Button";
import welcomeImg from "../../assets/welcome.jpg";

import "./styles.scss";

//1. Distruct user object from the rooter reducer then return an object of signSuccess that you will find (rootReducer user).(signInSuccess) from the state
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogleStart());
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

export default LoginForm;
