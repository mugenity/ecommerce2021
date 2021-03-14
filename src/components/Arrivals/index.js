import React from "react";
import ArrivalImg1 from "./../../assets/arrival1.jpg";
import ArrivalImg2 from "./../../assets/arrival2.jpg";
import ArrivalImg3 from "./../../assets/arrival3.jpg";
import ArrivalImg4 from "./../../assets/arrival4.jpg";
import ArrivalCard from "./ArrivalCard";

import "./styles.scss";

const NewArrivals = [
  {
    id: 0,
    img: ArrivalImg1,
    title: "Street Wear",
    subtitle: "Sneakers",
    inStock: "Out of Stock",
    price: "$ 24.99",
  },
  {
    id: 1,
    img: ArrivalImg2,
    title: "Classy Style",
    subtitle: "Suits",
    inStock: "In Stock",
    price: "$ 45.00",
  },
  {
    id: 2,
    img: ArrivalImg3,
    title: "Fashionista",
    subtitle: "Night Dress",
    inStock: "In Stock",
    price: "$ 30.99",
  },
  {
    id: 3,
    img: ArrivalImg4,
    title: "Accessory",
    subtitle: "Bag",
    inStock: "In Stock",
    price: "$ 50.99",
  },
];

function Arrivals() {
  return (
    <div className="arrivalsContainer">
      <h1>New Arrivals</h1>
      <ArrivalCard NewArrivals={NewArrivals} />
    </div>
  );
}

export default Arrivals;
