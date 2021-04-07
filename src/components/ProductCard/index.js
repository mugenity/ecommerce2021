import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../redux/Cart/cart.actions";
import { Link } from "react-router-dom";
import "./styles.scss";
import Button from "./../Button";

const ProductCard = (product) => {
  const dispatch = useDispatch();

  const { productName, productPrice, productThumbnail, documentID } = product;

  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === "undefined"
  )
    return null;

  const configAddToCard = {
    type: "button",
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addToCart(product));
  };

  return (
    <div className="cardContainer">
      <div className="thumbnailBox">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>
      <div className="infos">
        <span> {productName} </span>
        <span> {productPrice} $ </span>
        <Button
          {...configAddToCard}
          onClick={() => handleAddToCart(product)}
          type="button"
          className="addCartBtn"
          title="Add to Cart"
        />
      </div>
    </div>
  );
};

export default ProductCard;
