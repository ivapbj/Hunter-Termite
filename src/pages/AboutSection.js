import React from "react";
import CarpenterAnt from "../assets/carpenterant.jpg";
import BeetleImage from "../assets/powerbeetle.jpg";
import TermiteImage from "../assets/termiteimage.jpg";
import CarpenterBee from "../assets/carpenterbee.jpg";
import AboutImage from "../assets/AboutImage.png";
import "./AboutUs.css";

function AboutSection() {
  return (
    <section>
      <h2 className="h2">
        <i>
          {" "}
          Our specialist has over 25 years' experience in exterminating wood
          destroying insects
        </i>
      </h2>
      <div className="insect-container">
        <img src={CarpenterBee} alt="Carpenter Bee" className="bee-image" />
        <img src={TermiteImage} alt="Termite" className="termite-image" />
        <img src={CarpenterAnt} alt="Carpenter Ant" className="ant-image" />
        <img src={BeetleImage} alt="Beetle" className="beetle-image" />
      </div>
      <h1 className="h1"> Meet Mark Hunter</h1>
      <p className="blurb">
        <i>
          "West Springfield-based Hunter Termite and Pest Management has opened
          for business.
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
          Hunter Termite and Pest Management will keep the outdoors, outdoors!"
        </i>
        <br />
        <i> ~ citylifestyle.com</i>
      </p>

      <img src={AboutImage} alt="Markpic" className="about-image" />
      <div className="phone">Call/Text (413) 221-3065</div>
    </section>
  );
}

export default AboutSection;
