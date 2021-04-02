import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";
import SideBar from "../../components/SideBar";
import "./styles.scss";

const AdminLayout = ({ props, children }) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };
  return (
    <>
      <div className="adminWrapper">
        <SideBar>
          <ul className="menuItems">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span className="signOut" onClick={() => signOut()}>
                Sign Out
              </span>
            </li>
          </ul>
        </SideBar>
        <div className="rightBox">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
