import React from "react";
import GridImage1 from "../../assets/grid-image6.jpg";
import GridImage2 from "../../assets/grid-image2.jpg";
import GridImage3 from "../../assets/grid-image3.jpg";
import GridImage4 from "../../assets/grid-image5.jpg";
import GridImageVertical from "../../assets/grid-image-vertical.jpg";

import "./styles.scss";

function GridImages() {
  return (
    <div className="gridContainer">
      <div className="imageBox-a">
        <img src={GridImage1} alt="Grid-image1" />
      </div>
      <div className="imageBox-b">
        <img src={GridImage2} alt="Grid-image1" />
      </div>
      <div className="imageBox-c">
        <img src={GridImage3} alt="Grid-image1" />
      </div>
      <div className="imageBox-d">
        <img src={GridImage4} alt="Grid-image1" />
      </div>
      <div className="imageBox-e">
        <img src={GridImageVertical} alt="Grid-imageVertical" />
      </div>
    </div>
  );
}

export default GridImages;
