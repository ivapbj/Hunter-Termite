import React from "react";
import "./HeroSection.css"; // Make sure to import the CSS file
import CarpenterAnt from "../assets/carpenterant.jpg";
import BeetleImage from "../assets/powerbeetle.jpg";
import TermiteImage from "../assets/termiteimage.jpg";
import CarpenterBee from "../assets/carpenterbee.jpg";
import AboutImage from "../assets/AboutImage.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div>
        <img src={CarpenterBee} alt="Carpenter Bee" className="bee-image" />
        <img src={TermiteImage} alt="Termite" className="termite-image" />
        <img src={CarpenterAnt} alt="Carpenter Ant" className="ant-image" />
        <img src={BeetleImage} alt="Beetle" className="beetle-image" />
      </div>
      <div className="Meet">
        <h1> Meet Mark Hunter</h1>
        <img src={AboutImage} alt="Markpic" className="about-image" />
      </div>
      <div className="footer-texts">
        <p className="footer-phone">
          <a href="sms:+14132213065" className="text-button">
            Call/Text (413) 221-3065
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
