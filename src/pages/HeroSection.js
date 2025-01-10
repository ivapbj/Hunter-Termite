import React, { useState } from "react";
import "./HeroSection.css";
import CarpenterAnt from "../assets/carpenterant.jpg";
import BeetleImage from "../assets/powerbeetle.jpg";
import TermiteImage from "../assets/termiteimage.jpg";
import SwarmerImage from "../assets/termiteswarmer.png";
import CarpenterBee from "../assets/carpenterbee.jpg";
import AboutImage from "../assets/AboutImage.png";
import HeroImage from "../assets/Herosectionimage.jpg";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    phone: "",
  });

  // Handle the opening of the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Handle the closing of the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { message, phone } = formData;
    const smsBody = encodeURIComponent(`Message: ${message}%0APhone: ${phone}`);
    const smsLink = `sms:+14132213065?body=${smsBody}`;

    // Open the SMS app with the pre-filled information
    window.location.href = smsLink;

    // Close the modal
    closeModal();
  };

  return (
    <div className="hero-section">
      <div className="hero-image-container">
        <img src={HeroImage} alt="Hero Section" className="hero-image" />
        <button onClick={openModal} className="quote-button">
          GET A FREE QUOTE
        </button>
      </div>
      {/* Slogan */}
      <div className="slogan">We Keep the Outside, Outside!</div>

      {/* Insect Images */}
      <div className="insect-container">
        <div className="the-termites">
          <div className="termite-images">
            <img src={SwarmerImage} alt="Termite" className="termite-image" />
            <img
              src={TermiteImage}
              alt="Termite Swarmer"
              className="swarmer-image"
            />
            <div className="termite-label">Termites</div>
            <a
              href="sms:+14132213065?body=Please%20text%20how%20we%20can%20help"
              className="termite-help-link"
            >
              Get Help <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="insect-item">
          <img
            src={CarpenterAnt}
            alt="Carpenter Ant"
            className="carpenter-image"
          />
          <div className="insect-label">Carpenter Ants</div>
          <a
            href="sms:+14132213065?body=Please%20text%20how%20we%20can%20help"
            className="insect-help-link"
          >
            Get Help <span>&rarr;</span>
          </a>
        </div>
        <div className="insect-item">
          <img src={BeetleImage} alt="Beetle" className="beetle-image" />
          <div className="insect-label">Powder Post Beetles</div>
          <a
            href="sms:+14132213065?body=Please%20text%20how%20we%20can%20help"
            className="insect-help-link"
          >
            Get Help <span>&rarr;</span>
          </a>
        </div>
        <div className="insect-item">
          <img src={CarpenterBee} alt="Bee" className="bee-image" />
          <div className="insect-label">Carpenter Bees</div>
          <a
            href="sms:+14132213065?body=Please%20text%20how%20we%20can%20help"
            className="insect-help-link"
          >
            Get Help <span>&rarr;</span>
          </a>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={closeModal} className="close-modal">
              &times;
            </button>
            <h2>Please send a detailed message stating how we can help you.</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Describe the issue here..."
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <section>
        <h2 className="h2">
          <i>
            Mark Hunter has over 25 years' experience in exterminating wood
            destroying insects
          </i>
        </h2>
        <h1 className="h1">Mark Hunter</h1>
        <h3 className="h3">
          <i>Owner</i>
        </h3>
        <img src={AboutImage} alt="Markpic" className="about-image" />
        <p className="blurb">
          <i>
            "West Springfield-based Hunter Termite and Pest Management has
            opened for business.
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
            Western and Central and Massachusetts.
          </i>
          <br />
          <i>
            Hunter Termite and Pest Management will keep the outdoors,
            outdoors!"
          </i>
          <br />
          <i> ~ citylifestyle.com</i>
        </p>
        <a href="sms:+14132213065" className="phone">
          Call/Text (413) 221-3065
        </a>
      </section>
    </div>
  );
};

export default HeroSection;
