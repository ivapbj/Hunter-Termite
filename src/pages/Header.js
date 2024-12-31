import React from "react";
import HunterLogo from "../assets/Hunterlogo.jpg";
import LogImage from "../assets/logimage.jpg";
import { FaInstagram } from "react-icons/fa";
import "./Header.css"; // Import the CSS file

function Header() {
  return (
    <header className="header">
      {/* Left Section: Logo and Instagram Icon */}
      <div className="header-left">
        <img src={HunterLogo} alt="Hunter Website Logo" className="logo" />

        <a
          href="https://www.instagram.com/huntertermite/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FaInstagram />
        </a>
      </div>
      <h2 className="slogan">We Keep the Outside, Outside!</h2>
      <h3 className="subtext">
        Over 25 years of Exterminating in Wood Destroying Insects
      </h3>

      {/* Right Section: Button */}
      <div className="header-right">
        <a
          href="/quote" // Change this to your quote page or link
          className="quote-button"
        >
          GET A FREE QUOTE
        </a>
      </div>
    </header>
  );
}

export default Header;
