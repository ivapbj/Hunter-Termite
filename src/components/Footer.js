import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import GoogleImage from "../assets/googleimage.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        {/* Google Image */}
        <div className="mb-3">
          <img
            src={GoogleImage}
            alt="Google Rating"
            className="google-image img-fluid"
            style={{ maxWidth: "150px" }} // Adjust size proportionally
          />
        </div>

        {/* Rating Text */}
        <div className="mb-3">
          <a
            href="https://www.google.com/search?q=hunter+termite+and+pest+mgmt&rlz=1C1VDKB_enUS1079US1081&oq=hunt&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MhgIAhAuGEMYgwEYxwEYsQMY0QMYgAQYigUyBggDEEUYQDIICAQQRRgnGDsyBggFEEUYOzIQCAYQLhivARjHARiABBiOBTIMCAcQABhDGIAEGIoF0gEJNTE5NmoxajE1qAIAsAIA&sourceid=chrome&ie=UTF-8"
            target="_blank"
            rel="noopener noreferrer"
            className="rating-link text-decoration-none text-white"
            style={{ whiteSpace: "nowrap" }}
          >
            Rated 5 stars on Google and Angie's List
          </a>
        </div>

        {/* Social Icons */}
        <div className="mb-3">
          <a
            href="https://www.instagram.com/huntertermite/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link me-3 text-white"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571092454405"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-link text-white"
          >
            <FaFacebook size={30} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="footer-texts">
          <p className="mb-0">&copy; 2024 HUNTER TERMITE AND PEST MGMT</p>
          <p className="mb-0">
            &copy; created by{" "}
            <a
              href="https://instagram.com/theivanacollective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              TheIvanaCollective
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
