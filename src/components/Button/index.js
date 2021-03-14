import React from "react";

import "./styles.scss";

function Button({ title }) {
  return (
    <div className="Button">
      <button> {title} </button>
    </div>
  );
}

export default Button;
