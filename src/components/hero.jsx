import React, { useState, useEffect } from 'react';

export const Hero = () => {
  const images = [
    '/img/header/hero1.jpg',  // Path relative to public/
    '/img/header/hero2.jpg',
    '/img/header/hero3.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="m-hero-carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index + 1}`}
          className={`mhero ${index === currentImage ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

