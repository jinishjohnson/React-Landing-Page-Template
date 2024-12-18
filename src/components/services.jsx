import React from "react";

const serviceData = [
  {
    id: 1,
    heading: "Cutting-Edge Technology",
    caption: "Quality Craftsmanship",
    description:
      "Our sign board manufacturing capabilities span a wide range of products, from digital displays to custom-designed gateway signages, ensuring we can cater to all your signage requirements.",
      btn: "Learn More",
  },
  {
    id: 2,
    heading: "Expertise in Branding",
    caption: "Tailored Solutions",
    description:
      "Whether you need eye-catching promotional products, impactful corporate branding, or innovative LED displays, our team has the expertise to bring your vision to life and elevate your brand'spresence",
      btn: "Explore Our Offerings",

  },
];

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="card-container">
          {serviceData.map((service) => (
            <div className="items" key={service.id}>
              <p className="caption">{service.caption}</p>
              <h3 className="Card-heading">{service.heading}</h3>
              <p className="caption">{service.description}</p>
              <button className="Card-btn">{service.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
