import React from "react";
import Navbar from "../components/Navbar";

function HomepageLayout(props) {
  return (
    <div>
      <Navbar {...props} />
      {props.children}
    </div>
  );
}

export default HomepageLayout;
