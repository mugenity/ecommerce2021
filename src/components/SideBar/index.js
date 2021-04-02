import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./../UserProfile";
import "./styles.scss";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SideBar = ({ children }) => {
  const { currentUser } = useSelector(mapState);

  const configUserProfile = {
    currentUser,
  };

  return (
    <div className="sideBox">
      <div className="userAvatar">
        <UserProfile {...configUserProfile} />
      </div>
      <div className="menu">{children}</div>
    </div>
  );
};

export default SideBar;
