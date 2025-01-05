import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import "./footer.css"; // Make sure to import the CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-instagram">
        <a
          href="https://www.instagram.com/huntertermite/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61571092454405"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook-link"
        >
          <FaFacebook />
        </a>
      </div>
      <div>
        <p className="footer-copyright">
          &copy; 2024 HUNTER TERMITE AND PEST MGMT
        </p>
        <p className="footer-powered-by">
          &copy; powered by TheIvanaCollective
        </p>
      </div>
    </footer>
  );
}

export default Footer;
