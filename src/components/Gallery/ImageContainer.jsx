import React from "react";
import "./gallery.css";

const ImageContainer = ({ imageSource, description }) => {
  return (
    <div className="image-container">
      <img className="image" src={imageSource} alt={description} />
      <p className="image-description">{description}</p>
    </div>
  );
};

export default ImageContainer;
