import React from "react";

export const Image = ({ title, largeImage, smallImage, openLightbox }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <div onClick={() => openLightbox()} className="hover-text">
          <h4>{title}</h4>
        </div>
        <img
          src={smallImage}
          className="img-fluid" // Use img-fluid for responsive images in Bootstrap 4/5
          alt={title}
        />
      </div>
    </div>
  );
};
