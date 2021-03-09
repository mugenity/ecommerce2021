import React from "react";
import { MenuItems } from "../MenuItems";
import { Link } from "react-router-dom";

import "./styles.scss";

function Dropdown() {
  return (
    <>
      <ul className="dropdown-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to="/">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
