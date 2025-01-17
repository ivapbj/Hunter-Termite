import React, { useState } from "react";
import CarpenterAnt from "../assets/carpenterant.jpg";
import BeetleImage from "../assets/powerbeetle.jpg";
import TermiteImage from "../assets/termiteimage.jpg";
import CarpenterBee from "../assets/carpenterbee.jpg";
import AboutImage from "../assets/AboutImage.png";
import HeroImage from "../assets/Herosectionimage.jpg";
import SwarmerImage from "../assets/termiteswarmer.png";
// import "../pages/HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="position-relative text-center">
        {/* Hero Image */}
        <img
          src={HeroImage}
          alt="Hero Section"
          className="img-fluid w-100"
          style={{ height: "auto", objectFit: "contain" }}
        />

        {/* Button */}
        <button
          onClick={openModal}
          className="btn btn-warning position-absolute"
          style={{
            top: "70%", // Adjust the height (higher percentage moves it up)
            right: "3%", // Adjust distance from the right edge
            fontWeight: "bold", // Optional for a stronger appearance
          }}
        >
          GET A FREE QUOTE
        </button>
      </div>

      {/* Slogan */}
      <div className="text-center py-4 bg-light">
        <h3 className="text-uppercase fw-bold">
          We Keep the Outside, Outside!
        </h3>
      </div>

      {/* Insect Section */}
      <div className="container my-5">
        <div className="row gy-4">
          {[
            { src: [SwarmerImage, TermiteImage], label: "Termites" },
            { src: [CarpenterAnt], label: "Carpenter Ants" },
            { src: [CarpenterBee], label: "Carpenter Bees" },
            { src: [BeetleImage], label: "Post Powder Beetles" },
          ].map((insect, index) => (
            <div className="col-12 col-md-6 col-lg-3 text-center" key={index}>
              <div className="card">
                <div className="card-body">
                  {insect.src.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={insect.label}
                      className="img-fluid rounded mb-2"
                      style={{
                        border: "1px solid #000", // 8px black border
                        width: "100px", // Ensure uniform size
                        height: "100px",

                        objectFit: "cover", // Ensures image is scaled properly
                        marginRight: imageIndex === 0 ? "10px" : "0",
                      }}
                    />
                  ))}
                  <h5 className="card-title">{insect.label}</h5>
                  <a
                    href="sms:+14132213065"
                    className="btn btn-link text-decoration-none"
                  >
                    Get Help
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Send Us a Message</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <textarea
                      id="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-control"
                      rows="3"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Information */}
      <section className="text-center py-5 bg-secondary text-white">
        <h2>
          Mark Hunter has over 25 years' experience in exterminating
          wood-destroying insects
        </h2>
        <h1>Mark Hunter</h1>
        <h3>Owner</h3>
        <img
          src={AboutImage}
          className="img-fluid rounded my-3"
          alt="About Mark Hunter"
        />
        <p>
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
          className="btn btn-lg btn-light text-dark fw-bold"
        >
          Call/Text (413) 221-3065
        </a>
      </section>
    </div>
  );
};

export default HeroSection;
