import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Button from "./../Button";

const ProductCard = (props) => {
  const { productName, productPrice, productThumbnail, documentID } = props;

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
          type="button"
          className="addCartBtn"
          title="Add to Cart"
        />
      </div>
    </div>
  );
};

export default ProductCard;
