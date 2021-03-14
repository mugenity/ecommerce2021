import React from "react";
import Navbar from "../components/Navbar";

function MainLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}

export default MainLayout;
