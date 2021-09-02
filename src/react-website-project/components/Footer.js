import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscribe">
        <p className="footer-subscribe-title">
          Join to newsletter to receive updates on any new promotions and deals
        </p>
        <p className="footer-subscribe-text">You may unsubscribe at anytime</p>
        <div style={{ backgroundColor: "#382d2d" }}>
          <form style={{ backgroundColor: "#382d2d" }}>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="footer-input"
            ></input>
          </form>
          <button className="footer-subscribe-btn">Subscribe</button>
        </div>
      </section>

      <div className="footer-links-container">
        <div className="footer-items">
          <div className="footer-links">
            <h2>Shopping Tools</h2>
            <a href="/#">Store Locator</a>
            <a href="/#">Gift Cards</a>
            <a href="/#">Cars Parts Selector</a>
            <a href="/#">Tire Selector</a>
            <a href="/#">Brand Name Selector</a>
          </div>
          <div className="footer-links">
            <h2>Services</h2>
            <a href="/#">How it works</a>
            <a href="/#">Second text</a>
            <a href="/#">Careers</a>
            <a href="/#">Investors</a>
            <a href="/#">Terms and Conditions</a>
          </div>
        </div>

        <div className="footer-items">
          <div className="footer-links">
            <h2>Support</h2>
            <a href="/#">Online Ordering</a>
            <a href="/#">Check Order Status</a>
            <a href="/#">Update Order</a>
            <a href="/#">Customer Service/FAQ</a>
            <a href="/#">Returns</a>
          </div>
          <div className="footer-links">
            <h2>Corporate</h2>
            <a href="/#">Corporate Information</a>
            <a href="/#">Careera</a>
            <a href="/#">Business Opportunities</a>
            <a href="/#">Financial Services</a>
            <a href="/#">Reports</a>
          </div>
        </div>
      </div>
      <section className="footer-socialMediaIcon">
        <div className="footer-socialMediaIcon-items">
          <h2>Get social with us</h2>
          <div className="socialMediaIcons">
            <a href="http://www.facebook.com" className="socialMediaLinks">
              <FaFacebookSquare />
            </a>

            <a href="http://www.instagram.com" className="socialMediaLinks">
              <FaInstagramSquare />
            </a>

            <a href="http://www.twitter.com" className="socialMediaLinks">
              <FaTwitterSquare />
            </a>

            <a href="http://www.linkedin.com" className="socialMediaLinks">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
      <div className="footer-copyright">
        <p>Website – Copyright © 2021.</p>
      </div>
    </div>
  );
}

export default Footer;
