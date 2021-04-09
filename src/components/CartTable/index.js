import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "./../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import Button from "./../Button";
import "./styles.scss";
import CartItem from "../CartItem";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

const CartTable = () => {
  const { cartItems, cartTotal } = useSelector(mapState);
  const history = useHistory();

  return (
    <div className="cartContainer">
      {cartItems.length > 0 ? (
        <>
          <h1>Your Cart</h1>
          <table>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cartItems.map((cartItem, index) => {
              return <CartItem key={index} cartItem={cartItem} />;
            })}
          </table>
          <div className="totalPrice">
            <table>
              <tr>
                <td>Total : </td>
                <td>$ {cartTotal}</td>
              </tr>
            </table>
            <div className="buttons">
              <Button
                onClick={() => history.goBack()}
                title="Keep Shopping"
                className="cartBtn"
              />
              <Button title="Checkout ->" className="cartBtn" />
            </div>
          </div>
        </>
      ) : (
        <h1>Your Cart is empty...</h1>
      )}
    </div>
  );
};

export default CartTable;
