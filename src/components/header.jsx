import React, { useState, useEffect } from "react";
import "./Header.css";

export const Header = (props) => {
  const slides = [
    {
      text: "Welcome to Our Website",
      img: "img/header/hero1.jpg", // Replace with actual paths
    },
    {
      text: "Discover Our Services",
      img: "img/header/hero2.jpg",
    },
    {
      text: "Join Our Community",
      img: "img/header/hero3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-change every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <header id="header">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="overlay">
              <div className="text-container">
                <h1>{slide.text}</h1>
              </div>
            </div>
          </div>
        ))}
        {/* Buttons for manual control */}
        <button className="carousel-button prev" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="carousel-button next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </header>
  );
};
