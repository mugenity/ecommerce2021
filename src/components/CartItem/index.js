import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  addToCart,
  reduceCartItem,
} from "./../../redux/Cart/cart.actions";

import "./styles.scss";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    productCategory,
    documentID,
  } = cartItem;

  const handleDeleteItem = (documentID) => {
    dispatch(removeCartItem({ documentID }));
  };

  const handleAddCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleReduceCartItem = (cartItem) => {
    dispatch(reduceCartItem(cartItem));
  };

  return (
    <>
      <tr>
        <td>
          <div className="thumbnailBox">
            <Link to={`/product/${documentID}`}>
              <img src={productThumbnail} alt={productName} />
            </Link>
            <div className="infoProduct">
              <p>Name: {productName} </p>
              <small>
                Category:
                <Link to={`/products/${productCategory}`}>
                  <span> {cartItem.productCategory} </span>
                </Link>
              </small>
              <br />
              <i
                onClick={() => handleDeleteItem(documentID)}
                className="far fa-trash-alt"
              ></i>
            </div>
          </div>
        </td>
        <td>
          <span onClick={() => handleReduceCartItem(cartItem)}> - </span>
          <span className="quantity"> {quantity} </span>
          <span onClick={() => handleAddCart(cartItem)}> + </span>
        </td>
        <td>$ {productPrice} </td>
      </tr>
    </>
  );
};

export default CartItem;
