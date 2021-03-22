import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import InputField from "../InputField";
import Button from "../Button";
import welcomeImg from "../../assets/welcome.jpg";
import { signInWithGoogle, auth } from "./../../firebase/utils";

import "./styles.scss";

// const initialState = {
//   email: "",
//   password: "",
// };

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     ...initialState,
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange = (e) => {
  //   const { name, value } = e.target;

  //   this.setState({
  //     [name]: value,
  //   });
  //   setEmail
  // };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      resetForm();
      props.history.push("/");
    } catch (err) {
      // console.log(err);
    }
  };

  // const { email, password } = this.state;

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
            onClick={signInWithGoogle}
            title="Login with Google"
          />
        </form>
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
