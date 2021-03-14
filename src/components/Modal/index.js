import React from "react";
import "./styles.scss";

function Modal({ handleModal }) {
  return (
    <div onClick={handleModal} className="modalContainer">
      <div className="modalContentBox">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/T09fn0nJgPE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Fashion Week"
        ></iframe>
      </div>
    </div>
  );
}

export default Modal;
