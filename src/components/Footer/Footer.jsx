import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-12 footer-column">
          <div className="main-section">
            <h6>Knowledge Transfer</h6>
            <p>
              Lorem ipsum dolor sit amet adipiscing elit, sed eiusmod tempor
              incididunt ut labore et dolore aliqua consectetur adipiscing elit
              Lorem ipsum Lorem ipsum dolor sit amet
            </p>
            <div className="share">
              <a className="social-links">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="social-links">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-links">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
          <h4>Quick Links</h4>
          <div className="links">
            <a className="footer-link">
              Home
            </a>
            <a className="footer-link">
              About
            </a>
            <a className="footer-link">
              Trainings
            </a>
            <a className="footer-link">
              Contact
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
          <h4>Topics</h4>
          <div className="links">
            <a className="footer-link">
              Blanket Topics
            </a>
            <a className="footer-link">
              Country Topics
            </a>
            <a className="footer-link">
              Product Topics
            </a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
          <h4>Important Links</h4>
          <div className="links">
            <a className="footer-link">
              Privacy Policy
            </a>
            <a className="footer-link">
              Terms & Conditions
            </a>
            <a className="footer-link">
              Disclaimer
            </a>
            <a className="footer-link">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
