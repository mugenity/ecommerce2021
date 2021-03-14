import React from "react";

import "./styles.scss";

function ArrivalCard({ NewArrivals }) {
  return (
    <div className="arrivalCardContainer">
      {NewArrivals.map((product) => {
        return (
          <div key={product.id} className="arrivalCardBox">
            <div className="imgBox">
              <img src={product.img} alt="arrivalImage" />
            </div>
            <div className="infoProduct">
              <h4> {product.inStock} </h4>
              <hr />
              <h3>{product.title}</h3>
              <h5> {product.subtitle} </h5>
              <p> {product.price} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArrivalCard;
