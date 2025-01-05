import React from "react";
import "./HeroSection.css";
import { FaInstagram } from "react-icons/fa";
import CarpenterAnt from "../assets/carpenterant.jpg";
import BeetleImage from "../assets/powerbeetle.jpg";
import TermiteImage from "../assets/termiteimage.jpg";
import CarpenterBee from "../assets/carpenterbee.jpg";
import AboutImage from "../assets/AboutImage.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Slogan */}
      <div className="slogan">We Keep the Outside, Outside!</div>

      {/* Insect Images */}
      <div className="insect-container">
        <div className="insect-item">
          <img
            src={CarpenterAnt}
            alt="Carpenter Ant"
            className="carpenter-image"
          />
          <div className="insect-label">Carpenter Ants</div>
          <a href="/help" className="insect-help-link">
            Get Help <span>&rarr;</span>
          </a>
        </div>
        <div className="insect-item">
          <img src={BeetleImage} alt="Beetle" className="beetle-image" />
          <div className="insect-label">Powder Post Beetles</div>
          <a href="/help" className="insect-help-link">
            Get Help <span>&rarr;</span>
          </a>
        </div>
        <div className="insect-item">
          <img src={TermiteImage} alt="Termite" className="termite-image" />
          <div className="insect-label">Termites</div>
          <a href="/help" className="insect-help-link">
            Get Help <span>&rarr;</span>
          </a>
        </div>
        <div className="insect-item">
          <img src={CarpenterBee} alt="Bee" className="bee-image" />
          <div className="insect-label">Carpenter Bees</div>
          <a href="/help" className="insect-help-link">
            Get Help <span>&rarr;</span>
          </a>
        </div>
      </div>

      {/* Quote Button */}
      <a href="/quote" className="quote-button">
        GET A FREE QUOTE
      </a>
      <section>
        <h2 className="h2">
          <i>
            Our specialist has over 25 years' experience in exterminating wood
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
            Agawam, West Springfield, and the surrounding communities.
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
