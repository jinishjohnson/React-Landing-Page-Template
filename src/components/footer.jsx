import React from "react";
import { Link } from "react-scroll"; // Import the Link component from react-scroll
import "./footer.css";

const footerData = [
  {
    id: 1,
    heading: "Quick Links",
    items: ["Home", "About", "Services", "Contact"], // These should correspond to section ids
  },
  {
    id: 2,
    heading: "Our Services",
    items: ["Digital Signs", "Moving Display", "Branding", "Promotional Products"],
  },
  {
    id: 3,
    heading: "Connect With Us",
    items: [
      { name: "Facebook", link: "https://www.facebook.com" },
      { name: "Instagram", link: "https://www.instagram.com" },
      { name: "Twitter", link: "https://www.twitter.com" },
      { name: "LinkedIn", link: "https://www.linkedin.com" },
    ],
  },
];

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row-footer">
          {footerData.map((section) => (
            <div className="footer-col" key={section.id}>
              <h5>{section.heading}</h5>
              <ul>
                {section.items.map((item, index) => {
                  // Check if the item is an object (social media link)
                  if (typeof item === "object" && item.link) {
                    return (
                      <li key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.name}
                        </a>
                      </li>
                    );
                  }

                  // Handle regular string links (e.g., Quick Links, Our Services)
                  return (
                    <li key={index}>
                      <Link
                        to={item.toLowerCase()} // Use lowercase for section IDs
                        smooth={true} // Enable smooth scrolling
                        duration={500} // Duration of scroll animation
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-container2">
        <div className="footersec">
          <p className="footer-left">Copyright © 2024 dhiyasigns.com</p>
          <a href="https://winscreatives.com">
            <p className="footer-right">Powered by WinsCreatives</p>
          </a>
        </div>
      </div>
    </div>
  );
};
