import React, { useState } from "react";
import { carouselData } from "../../helpers/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./styles.scss";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${carouselData[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon className="arrowLeft" />
        </div>
        <div className="center">
          {/* <h1>{carouselData[currImg].title}</h1>
          <ps>{carouselData[currImg].subtitle}</ps> */}
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < carouselData.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon className="arrowRight" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
