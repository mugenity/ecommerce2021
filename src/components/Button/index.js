import React from "react";

import "./styles.scss";

function Button({ title, ...otherProps }) {
  return (
    <div className="Button">
      <button {...otherProps}> {title} </button>
    </div>
  );
}

export default Button;
