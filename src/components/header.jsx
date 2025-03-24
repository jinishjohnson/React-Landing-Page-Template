import React, { useEffect, useState } from 'react';
import './Header.css';

export const Header = () => {
  const [curSlide, setCurSlide] = useState(0);
  const numOfSlides = 2; 
  const animTime = 500;
  const autoSlideDelay = 4000;
  const [animating, setAnimating] = useState(false);
  let autoSlideTimeout;

  useEffect(() => {
    const autoSlide = () => {
      autoSlideTimeout = setTimeout(() => {
        setCurSlide((prev) => (prev >= numOfSlides ? 0 : prev + 1));
      }, autoSlideDelay);
    };

    autoSlide();
    return () => clearTimeout(autoSlideTimeout);
  }, [curSlide]);

  const changeSlides = (newSlide) => {
    if (animating) return;
    setAnimating(true);
    setCurSlide(newSlide);

    setTimeout(() => {
      setAnimating(false);
    }, animTime);
  };

  const navigateLeft = () => {
    if (curSlide > 0) changeSlides(curSlide - 1);
  };

  const navigateRight = () => {
    if (curSlide < numOfSlides) changeSlides(curSlide + 1);
  };

  const handlePaginationClick = (page) => {
    changeSlides(page);
  };

  return (
    <div className='hero-body'>
      <div className="slider-container">
        <div
          className={`slider-control left ${curSlide === 0 ? "inactive" : ""}`}
          onClick={navigateLeft}
        ></div>
        <div
          className={`slider-control right ${curSlide === numOfSlides ? "inactive" : ""}`}
          onClick={navigateRight}
        ></div>
        <ul className="slider-pagi">
          {[...Array(numOfSlides + 1)].map((_, index) => (
            <li
              key={index}
              className={`slider-pagi__elem ${curSlide === index ? "active" : ""}`}
              onClick={() => handlePaginationClick(index)}
            ></li>
          ))}
        </ul>
        <div className="slider" style={{ transform: `translate3d(-${curSlide * 100}%, 0, 0)` }}>
          <div 
            className={`slide slide-0 ${curSlide === 0 ? "active" : ""}`} 
            style={{ backgroundImage: `url('/img/header/hero1.jpg')` }}
          >
            <div className="slide__bg"></div>
            <div className="slide__content">
              <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
              </svg>
              <div className="slide__text">
                <h2 className="slide__text-heading">Enterprise Business Solutions</h2>
                <p className="slide__text-desc">
                  The competitive scenario of business has called for efficient operational activities, leveraging
                  investment cost and overall high profitability. Our experts will guide you to achieve all with perfect
                  enterprise business solution.
                </p>
                <a className="slide__text-link" href="#">Learn More</a>
              </div>
            </div>
          </div>
          <div 
            className={`slide slide-1 ${curSlide === 1 ? "active" : ""}`} 
            style={{ backgroundImage: `url('/img/header/hero2.png')` }}
          >
            <div className="slide__bg"></div>
            <div className="slide__content">
              <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
              </svg>
              <div className="slide__text">
                <h2 className="slide__text-heading">Enterprise Application Services</h2>
                <p className="slide__text-desc">
                  The customer base is retained by the complete and appropriate application maintenance and support
                  service. Partner with us to get the accurate service and retain the trust and usability factor of your
                  user base.
                </p>
                <a className="slide__text-link" href="#">Learn More</a>
              </div>
            </div>
          </div>
          <div 
            className={`slide slide-2 ${curSlide === 2 ? "active" : ""}`} 
            style={{ backgroundImage: `url('/img/header/hero3.png')` }}
          >
            <div className="slide__bg"></div>
            <div className="slide__content">
              <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
              </svg>
              <div className="slide__text">
                <h2 className="slide__text-heading">Digital Marketing Services</h2>
                <p className="slide__text-desc">
                  Nowadays people are busy and it has drastically changed the purchasing scenario. They focus more and
                  more on the digital world and rely on it for maximum things; 
                </p>
                <a className="slide__text-link" href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};
