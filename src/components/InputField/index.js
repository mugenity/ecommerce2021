import React from "react";

function inputField({ label, ...otherProps }) {
  const { iName, type, placeHolder, required } = otherProps;

  return (
    <div className="inputField">
      {label ? <label> {label} </label> : null}
      <input
        type={type}
        placeholder={placeHolder}
        name={iName}
        required={required ? required : null}
      />
    </div>
  );
}

export default inputField;
