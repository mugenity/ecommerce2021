import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOutUserStart } from "./../../redux/User/user.actions";
import logo from "../../assets/logo.png";

import "./styles.scss";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function Navbar(props) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const [openMenu, setOpenMenu] = useState(false);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  const showOverlay = openMenu && (
    <div className="overlayMenu">
      <span className="closeBtn" onClick={() => setOpenMenu(false)}>
        X
      </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/">Product</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <header className="navigationBox">
      {showOverlay}
      <div className="navbarNavigation">
        <div className="burgerMenu" onClick={() => setOpenMenu(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="menuDesktop">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="rightItems">
          <li>
            <Link to="/">
              Cart <span>(0)</span>
            </Link>
          </li>
          {!currentUser && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {currentUser && (
            <>
              <li>
                <Link to="/dashboard">Account</Link>
              </li>
              <li>
                <Link to="/" onClick={() => signOut()}>
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

Navbar.defaultProps = {
  currentUser: null,
};

export default Navbar;
