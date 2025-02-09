import React from "react";
import "./Gallery.css";
const ImageItem = ({ props }) => {
  return (
    <div className="image-container">
      <img src={props.url} alt="" className="img-item" />
      <p className="image-description">{props.description}</p>
    </div>
  );
};

export default ImageItem;
