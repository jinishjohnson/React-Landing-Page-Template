import React, { useState, useEffect } from "react";
import "./TeamCarousel.css";

export const Team = (props) => {
  const data = props.data && Array.isArray(props.data) ? props.data : [];

  // Duplicate the data to create a seamless looping effect
  const loopData = [...data, ...data];

  const [offset, setOffset] = useState(0);
  const itemWidth = 25; // Each item is 25% width (4 items per row in this case)
  const totalWidth = itemWidth * data.length; // Total width of the original data

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset - 0.1; // Adjust scrolling speed

        // Use modulus to wrap around without resetting abruptly
        return newOffset % totalWidth;
      });
    }, 50); // Adjust the interval for smoothness and speed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalWidth]);

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Clients</h2>
        </div>

        {/* Continuous Carousel */}
        <div id="team-carousel" className="team-carousel">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(${offset}%)`,
              transition: "transform 0.1s linear",
            }}
          >
            {loopData.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  <img src={d.img} alt={d.name} className="team-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
