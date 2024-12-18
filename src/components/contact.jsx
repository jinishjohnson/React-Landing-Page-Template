import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "./contact.css"; // Custom CSS for styling

const initialState = {
  name: "",
  email: "",
  phone: "",
};

export const Contact = () => {
  const [{ name, email, phone }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container" id="section-contact">
      <div id="contact" className="contact-section">
        <div className="contact_container">
          <div className="row-contact">
            {/* Left Side: "Contact Us" Text */}
            <div className="col-md-6 contact-left">
              <h2>Contact Us</h2>
            </div>

            {/* Right Side: Form */}
            <div className="col-md-6 contact-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                  <label>Your Name</label>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  <label>Your Email</label>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={phone}
                    onChange={handleChange}
                    required
                  />
                  <label>Your Phone Number</label>
                </div>
                <button type="submit" className="btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
