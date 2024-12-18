import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; 

export const Gallery = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="portfolio-row portfolio-items">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={i}
                  className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-4 col-xxl-4 " // Adjust to show 3 items per row on all screen sizes
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={d.smallImage}
                    alt={d.title}
                    className="img-fluid"
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={props.data[currentIndex].largeImage}
          nextSrc={props.data[(currentIndex + 1) % props.data.length].largeImage}
          prevSrc={props.data[(currentIndex + props.data.length - 1) % props.data.length].largeImage}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentIndex((currentIndex + props.data.length - 1) % props.data.length)
          }
          onMoveNextRequest={() =>
            setCurrentIndex((currentIndex + 1) % props.data.length)
          }
        />
      )}
    </div>
  );
};
