import React, { useState } from "react";
import CarpenterAnt from "../assets/carpenterant.jpg";
import BeetleImage from "../assets/powerbeetle.jpg";
import TermiteImage from "../assets/termiteimage.jpg";
import CarpenterBee from "../assets/carpenterbee.jpg";
import AboutImage from "../assets/AboutImage.png";
import HeroImage from "../assets/Herosectionimage.jpg";
import SwarmerImage from "../assets/termiteswarmer.png";
import "../pages/HeroSection.css";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    phone: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { message, phone } = formData;
    const smsBody = encodeURIComponent(`Message: ${message}%0APhone: ${phone}`);
    const smsLink = `sms:+14132213065?body=${smsBody}`;
    window.location.href = smsLink;
    closeModal();
  };

  return (
    <div className="hero-section">
      {/* Hero Section */}
      <div className="hero-image-container">
        <img src={HeroImage} alt="Hero Section" className="hero-image" />
        <button onClick={openModal} className="hero-button">
          GET A FREE QUOTE
        </button>
      </div>

      {/* Slogan */}
      <div className="slogan">We Keep the Outside, Outside!</div>

      {/* Insect Section */}
      {/* Insect Section */}
      <div className="insect-section">
        {[
          { src: [SwarmerImage, TermiteImage], label: "Termites" },
          { src: [CarpenterAnt], label: "Carpenter Ants" },
          { src: [CarpenterBee], label: "Carpenter Bees" },
          { src: [BeetleImage], label: "Post Powder Beetles" },
        ].map((insect, index) => (
          <div className="insect-card" key={index}>
            <div className="insect-images">
              {insect.src.map((image, imageIndex) => (
                <img
                  key={imageIndex} // Add a unique key for each image
                  src={image} // Pass the correct `src` attribute
                  alt={insect.label} // Add an alt attribute for accessibility
                  className="insect-image"
                />
              ))}
            </div>
            <span className="insect-label">{insect.label}</span>{" "}
            {/* Render the label */}
            {/* Insect Help Link */}
            <a
              href="sms:+14132213065"
              className="insect-link"
              onMouseOver={(e) => (e.target.style.color = "#003399")}
              onMouseOut={(e) => (e.target.style.color = "#0066cc")}
            >
              Get Help
            </a>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close">
              &times;
            </button>
            <h2 className="modal-header">Send Us a Message</h2>
            <form className="modal-form">
              <textarea
                id="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
                className="modal-textarea"
              />
              <input
                type="tel"
                id="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="modal-input"
              />
              <button type="submit" className="modal-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Information */}
      <section className="hero-info">
        <h2 className="hero-info h2">
          <i>
            Mark Hunter has over 25 years' experience in exterminating wood
            destroying insects
          </i>
        </h2>
        <h1 className="hero-info h1">Mark Hunter</h1>
        <h3 className="hero-info h3">
          <i>Owner</i>
        </h3>
        <img src={AboutImage} className="hero-info image" />
        <p className="hero-info p">
          <i>
            "West Springfield-based Hunter Termite and Pest Management has
            opened for business."
          </i>
          <br />
          <i>
            Owner Mark Hunter specializes in the eradication of wood-destroying
            insects.
          </i>
          <br />
          <i>
            With more than 25 years' experience in the industry, Mark is now
            offering personalized service for homes and businesses in
            <i>
              <br />
            </i>{" "}
            Western and Central Massachusetts.
          </i>
          <br />
          <i>
            Hunter Termite and Pest Management will keep the outdoors,
            outdoors!"
          </i>
          <br />
          <i> ~ citylifestyle.com</i>
        </p>
        <a
          href="sms:+14132213065"
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#000",
            textDecoration: "none",
            marginTop: "0px",
          }}
        >
          Call/Text (413) 221-3065
        </a>
      </section>
    </div>
  );
};

export default HeroSection;
