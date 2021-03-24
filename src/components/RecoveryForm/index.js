import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPassword,
  resetAllAuthForms,
} from "./../../redux/User/user.actions";
import { withRouter } from "react-router-dom";
import backgroundImg from "../../assets/grid-image2.jpg";
import InputField from "../InputField";
import Button from "../Button";
import "./styles.scss";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  resetPasswordError: user.resetPasswordError,
});

const RecoveryForm = (props) => {
  const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetAllAuthForms());
      props.history.push("/login");
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
      setErrors(resetPasswordError);
    }
  }, [resetPasswordError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
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
