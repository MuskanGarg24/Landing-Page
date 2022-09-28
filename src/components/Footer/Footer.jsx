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
              <a href="#" className="social-links">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-links">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-links">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
          <h4>Quick Links</h4>
          <div className="links">
            <a href="#" className="footer-link">
              Home
            </a>
            <a href="#" className="footer-link">
              About
            </a>
            <a href="#" className="footer-link">
              Trainings
            </a>
            <a href="#" className="footer-link">
              Contact
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
          <h4>Topics</h4>
          <div className="links">
            <a href="#home" className="footer-link">
              Blanket Topics
            </a>
            <a href="#category" className="footer-link">
              Country Topics
            </a>
            <a href="#product" className="footer-link">
              Product Topics
            </a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
          <h4>Important Links</h4>
          <div className="links">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Terms & Conditions
            </a>
            <a href="#" className="footer-link">
              Disclaimer
            </a>
            <a href="#" className="footer-link">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
