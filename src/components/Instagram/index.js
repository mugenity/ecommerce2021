import React from "react";
import insta1 from "../../assets/insta1.jpg";
import insta2 from "../../assets/insta2.jpg";
import insta3 from "../../assets/insta3.jpg";
import insta4 from "../../assets/insta4.jpg";
import insta5 from "../../assets/insta5.jpg";
import insta6 from "../../assets/insta6.jpg";

import "./style.scss";

const instaImages = [
  {
    id: 0,
    img: insta1,
  },
  {
    id: 1,
    img: insta2,
  },
  {
    id: 2,
    img: insta3,
  },
  {
    id: 3,
    img: insta4,
  },
  {
    id: 4,
    img: insta5,
  },
  {
    id: 5,
    img: insta6,
  },
];

function Instagram() {
  return (
    <div className="instaContainer">
      <div className="titles">
        <h1>Follow Us</h1>
        <h5>@profil_Instagram</h5>
      </div>
      <div className="instaImg">
        {instaImages.map((insta) => {
          return (
            <div key={insta.id} className="individualBox">
              <img key={insta.id} src={insta.img} alt="insta-img" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Instagram;
