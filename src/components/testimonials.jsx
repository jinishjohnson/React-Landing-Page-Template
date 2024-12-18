import React, { useState } from "react";

const testimonialsData = [
  { id: 1, img: "https://w7.pngwing.com/pngs/226/722/png-transparent-gallery-image-icon.png", title: "Card Title 1", content: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet." },
  { id: 2, img: "https://w7.pngwing.com/pngs/226/722/png-transparent-gallery-image-icon.png", title: "Card Title 2", content: "Fugiat saepe nihil optio eaque.Lorem ipsum dolor sit amet." },
  { id: 3, img: "https://w7.pngwing.com/pngs/226/722/png-transparent-gallery-image-icon.png", title: "Card Title 3", content: "Error maxime autem ullamLorem ipsum dolor sit amet.." },
  { id: 4, img: "https://w7.pngwing.com/pngs/226/722/png-transparent-gallery-image-icon.png", title: "Card Title 4", content: "Perspiciatis velit rem enim.Lorem ipsum dolor sit amet." },
  { id: 5, img: "https://w7.pngwing.com/pngs/226/722/png-transparent-gallery-image-icon.png", title: "Card Title 5", content: "Adipisci nec volutpat ipsum.Lorem ipsum dolor sit amet." },
  { id: 6, img: "https://w7.pngwing.com/pngs/226/722/png-transparent-gallery-image-icon.png", title: "Card Title 6", content: "Ipsum rem veniam minima.Lorem ipsum dolor sit amet." }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonialsData.length / itemsPerPage);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2 style={{ color: "white" }}>Other Services</h2>
        </div>
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.map((testimonial) => (
              <div className="Service-card" key={testimonial.id}>
                <img className="card-img" src={testimonial.img} alt={testimonial.title} width={100} height={100} />
                <h4 className="card-title">{testimonial.title}</h4>
                <p className="card-content">{testimonial.content}</p>
                <button className="button-card">Get in Touch</button>
              </div>
            ))}
          </div>
        </div>
        <div className="dot-navigation">
          {Array(totalSlides)
            .fill()
            .map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
        </div>
      </div>
    </div>
  );
};
