import React from "react";
import "./styles.scss";
import Button from "./../Button";

const ProductCard = (props) => {
  const { productName, productPrice, productThumbnail } = props;

  if (!productThumbnail || !productName || typeof productPrice === "undefined")
    return null;

  const configAddToCard = {
    type: "button",
  };

  return (
    <div className="cardContainer">
      <div className="thumbnailBox">
        <img src={productThumbnail} alt={productName} />
      </div>
      <div className="infos">
        <span> {productName} </span>
        <span> {productPrice} $ </span>
        <Button
          {...configAddToCard}
          className="addCartBtn"
          title="Add to Cart"
        />
      </div>
    </div>
  );
};

export default ProductCard;
