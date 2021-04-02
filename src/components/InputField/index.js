import React from "react";
import "./styles.scss";

function inputField({ label, ...otherProps }) {
  return (
    <div className="inputField">
      {label ? <label> {label} </label> : null}
      <input {...otherProps} />
    </div>
  );
}

export default inputField;
