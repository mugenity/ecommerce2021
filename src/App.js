import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";

import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";

import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import "./index.scss";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }

      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Homepage />
              </MainLayout>
            )}
          />
          <Route
            path="/register"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <HomepageLayout currentUser={currentUser}>
                  <Registration />
                </HomepageLayout>
              )
            }
          />
          <Route
            path="/login"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <HomepageLayout currentUser={currentUser}>
                  <Login />
                </HomepageLayout>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
