import React, { useState } from "react";
import backImg from "../../assets/videoBack.jpg";
import Modal from "../Modal";

import "./styles.scss";

function VideoSection() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div
      className="videoContainer"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="infoContainer">
        <div className="typoBox">
          <h5>Exclusive Collection</h5>
          <h1>Trending 2021</h1>
        </div>
        <div className="videoBtnBox">
          <i onClick={handleModal} className="far fa-play-circle">
            <span>Watch Video</span>
          </i>
        </div>
      </div>
      {openModal && <Modal handleModal={handleModal} />}
    </div>
  );
}

export default VideoSection;
