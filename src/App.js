import { Switch, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";

import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import "./index.scss";

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
