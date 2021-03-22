import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";
import { setCurrentUser } from "./redux/User/user.actions";

//hoc
import WithAuth from "./hoc/withAuth";

import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";

import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import "./index.scss";
import Recovery from "./pages/Recovery";

const App = (props) => {
  // authListener = null;
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          //same as this.props.setCurrentUser
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth); //if the user is not logged in it will return null
    });

    return () => {
      setCurrentUser(authListener);
    };
  }, []);

  // componentDidMount() {
  //   const { setCurrentUser } = this.props;

  //   this.authListener = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await handleUserProfile(userAuth);
  //       userRef.onSnapshot((snapshot) => {
  //         //same as this.props.setCurrentUser
  //         setCurrentUser({
  //           id: snapshot.id,
  //           ...snapshot.data(),
  //         });
  //       });
  //     }

  //     setCurrentUser(userAuth); //if the user is not logged in it will return null
  //   });
  // }

  // componentWillUnmount() {
  //   this.authListener();
  // }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          path="/register"
          render={() => (
            <HomepageLayout>
              <Registration />
            </HomepageLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <HomepageLayout>
              <Login />
            </HomepageLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <HomepageLayout>
              <Recovery />
            </HomepageLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
