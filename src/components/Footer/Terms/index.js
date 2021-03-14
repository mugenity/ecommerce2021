import React from "react";
import "./styles.scss";

function Terms() {
  return (
    <div className="termsContainer">
      <div className="categories">
        <h3>Categories</h3>
        <span>For Men</span>
        <span>For Woman</span>
      </div>
      <div className="account">
        <h3>Account</h3>
        <span>Register</span>
        <span>Login</span>
      </div>
      <div className="quickLinks">
        <h3>Quick Links</h3>
        <span>Shipping & Returns</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
      <div className="company">
        <h3>Company</h3>
        <span>About us</span>
        <span>FAQs</span>
      </div>
      <div className="supportContainer">
        <div className="supportMessage">
          <i className="fas fa-laptop-code"></i>
          <div className="info">
            <span>We offer 24/7 dedicated support</span>
            <span>If you need support send us a message</span>
          </div>
        </div>
        <div className="supportPhone">
          <i className="fas fa-headset" />
          <div className="info">
            <span>Got Question? Call us 24/7 </span>
            <span>(012) 345 000 789</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
