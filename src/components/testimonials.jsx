import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './testimonial.css'; // Assuming you're separating styles
//images//
// import cardimg1 from "../"




gsap.registerPlugin(ScrollTrigger);

export const Testimonials = () => {
  const horizontalRef = useRef(null);

  useEffect(() => {
    const horizontalSection = horizontalRef.current;

    if (horizontalSection) {
      gsap.to(horizontalSection, {
        x: () => horizontalSection.scrollWidth * -1,
        xPercent: 100,
        scrollTrigger: {
          trigger: horizontalSection,
          start: 'center center',
          end: '+=2000px',
          pin: horizontalSection.parentNode,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }
  }, []);

  const cardData = [
    {
      title: "Signages interior & Exterior",
      image: "/img/CardImages/Signages.jpg",
      description: "We provide high-quality, customizable displays for any space, both interior and exterior.Interior displays engage your audience with your services, while exterior displays attract customers’ attention to your offerings.",
      buttonText: "Learn More",
    },
    {
      title: "Digital Signsages",
      image: "/img/CardImages/Digital.jpg",
      description: "We provide smart, simple, and effective digital signage solutions for your business, including digital screens, LED displays, interactive kiosks, and video walls.",
      buttonText: "Learn More",
    },
    {
      title: "Gateway Signages",
      image: "/img/CardImages/GatewaySignages.jpg",
      description: "Essential elements of site planning and wayfinding systems. Designed to be highly visible, durable, and convey clear and concise information to users. ",
      buttonText: "Learn More",
    },
    {
      title: "Exhibition Stalls",
      image: "/img/CardImages/Exhibition.jpg",
      description: "Boost Your Brand with  our Attractive Exhibition Stalls!Use space wisely, grab attention, and keep costs low.",
      buttonText: "Learn More",
    },
    {
      title: "Mementos",
      image: "/img/CardImages/Mementos.jpg",
      description: "These custom-made mementos, crafted with precision and personalized details, are perfect for commemorating achievements and honoring special individuals.",
      buttonText: "Learn More",
    },
    // {
    //   title: "Corporate Branding",
    //   image: "https://via.placeholder.com/150",
    //   description: "This is a description for Card 5. Explore more details about it.",
    //   buttonText: "Learn More",
    // },
    {
      title: "Bus stop Branding",
      image: "/img/CardImages/Bustop.jpg",
      description: "You can brand your business at high-traffic locations through  our bus stop ads. It's highly effective and visible. We offer customized ad solutions to enhance your brand presence.",
      buttonText: "Learn More",
    },
  ];

  return (
    <div>
      <section className="intro">
        <h1 className='into-title'>Explore Our Next Generation Sign Board</h1>
      </section>

      <section id="horizontal-scoll">
        <div className="horizontal-scoll-wrapper">
          <div className="horizontal" ref={horizontalRef}>
            {cardData.map((card, index) => (
              <div key={index}>
                <div className="card">
                  <img src={card.image} alt={`${card.title}`} className="card-image" />
                  <h2 className='card-tle'>{card.title}</h2>
                  <p className="card-description">{card.description}</p>
                  <button className="card-button">{card.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
