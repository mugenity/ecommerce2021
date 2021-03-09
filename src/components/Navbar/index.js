import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import logo from "../../assets/logo.png";
import "./styles.scss";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className="navigation">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="centerNavItems">
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/">
              Shop <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className="rightNavItems">
        <ul>
          <li>
            Your Cart<span>(0)</span>
          </li>
          <li>Register</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
