import React from "react";
import "./styles.scss";

function Info() {
  return (
    <div className="infosContainer">
      <div className="info">
        <i className="fas fa-truck" />
        <div className="infoDetail">
          <span>Free Delivery</span>
          <span>Free shipping worldwide</span>
        </div>
      </div>
      <div className="info">
        <i className="fas fa-hand-holding-usd" />
        <div className="infoDetail">
          <span>Money Back</span>
          <span>Refund in 30 days</span>
        </div>
      </div>
      <div className="info">
        <i className="fas fa-credit-card" />
        <div className="infoDetail">
          <span>Secure Payment</span>
          <span>No transaction fees</span>
        </div>
      </div>
      <div className="info">
        <i className="fas fa-cart-arrow-down" />
        <div className="infoDetail">
          <span>Member Discount</span>
          <span>Free deals every week</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
