import React from "react";
import { FaInstagram } from "react-icons/fa";
import LogImage from "../assets/logimage.jpg";
import "./footer.css"; // Make sure to import the CSS

function Footer() {
  return (
    <footer className="footer">
      {/* Left Black Box */}
      <div className="footer-left-box">
        <p className="footer-copyright">
          &copy; 2024 HUNTER TERMITE AND PEST MGMT
        </p>
        <p className="footer-powered-by">
          &copy; powered by TheIvanaCollective
        </p>
      </div>

      {/* Right Black Box */}
      <div className="footer-right-box">
        <div className="footer-texts">
          <p className="footer-phone">
            <a href="sms:+14132213065" className="text-button">
              Call/Text (413) 221-3065
            </a>
          </p>
        </div>
        <a
          href="https://www.instagram.com/huntertermite/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
