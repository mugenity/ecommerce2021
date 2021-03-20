import React from "react";

function inputField({ label, ...otherProps }) {
  return (
    <div className="inputField">
      {label ? <label> {label} </label> : null}
      <input {...otherProps} />
    </div>
  );
}

export default inputField;
