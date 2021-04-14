import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";

//components
import AdminBar from "./components/AdminBar";

//hoc
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";

import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Order from "./pages/Order";

import "./index.scss";
import Recovery from "./pages/Recovery";
import AdminLayout from "./layouts/AdminLayout/";
import DashBoardLayout from "./layouts/DashboardLayout/";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
// import Test from "./components/Test";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <AdminBar />
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
              <DashBoardLayout>
                <Dashboard />
              </DashBoardLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
        <Route
          exact
          path="/products"
          render={() => (
            <MainLayout>
              <ProductsPage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/cart"
          render={() => (
            <MainLayout>
              <CartPage />
            </MainLayout>
          )}
        />
        {/* <Route
          exact
          path="/test"
          render={() => (
            <MainLayout>
              <Test />
            </MainLayout>
          )}
        /> */}
        <Route
          exact
          path="/payment"
          render={() => (
            <WithAuth>
              <MainLayout>
                <CheckoutPage />
              </MainLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/products/:filterType"
          render={() => (
            <MainLayout>
              <ProductsPage />
            </MainLayout>
          )}
        />
        <Route
          path="/product/:productID"
          render={() => (
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          )}
        />
        <Route
          path="/order/:orderID"
          render={() => (
            <WithAuth>
              <DashBoardLayout>
                <Order />
              </DashBoardLayout>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
