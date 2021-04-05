import React from "react";
import "./styles.scss";
import Button from "./../Button";

const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return (
    <>
      <Button
        className="loadMoreBtn"
        onClick={() => onLoadMoreEvt()}
        title="Load More"
      />
    </>
  );
};

export default LoadMore;
