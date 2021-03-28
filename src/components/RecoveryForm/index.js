import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPasswordStart,
  resetUserState,
} from "./../../redux/User/user.actions";
import { useHistory } from "react-router-dom";
import backgroundImg from "../../assets/grid-image2.jpg";
import InputField from "../InputField";
import Button from "../Button";
import "./styles.scss";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr,
});

const RecoveryForm = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { resetPasswordSuccess, userErr } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      history.push("/login");
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
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

export default RecoveryForm;
