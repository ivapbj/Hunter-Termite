import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import GoogleImage from "../assets/googleimage.png";
import "../components/footer.css"; // Ensure the CSS is correctly imported
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div class="wrapper">
      <footer className="footer">
        <div className="footer-content">
          {/* Rating Section */}
          <div className="rating-section">
            <img
              src={GoogleImage}
              alt="Google Rating"
              className="google-image"
            />
            <a
              href="https://www.google.com/search?q=hunter+termite+and+pest+mgmt&rlz=1C1VDKB_enUS1079US1081&oq=hunt&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MhgIAhAuGEMYgwEYxwEYsQMY0QMYgAQYigUyBggDEEUYQDIICAQQRRgnGDsyBggFEEUYOzIQCAYQLhivARjHARiABBiOBTIMCAcQABhDGIAEGIoF0gEJNTE5NmoxajE1qAIAsAIA&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              className="rating-link"
            >
              Rated 5 stars on Google and Angie's List
            </a>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
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
        </div>

        {/* Footer Text */}
        <div className="footer-texts">
          <p className="footer-copyright">
            &copy; 2024 HUNTER TERMITE AND PEST MGMT
          </p>
          <p className="footer-powered-by">
            &copy; created by
            <a
              href="https://instagram.com/theivanacollective"
              targert="blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              TheIvanaCollective
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
