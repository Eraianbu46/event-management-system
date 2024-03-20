import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>ADDRESS</h4>
            <br />
            <h5 className="list-unstyled">
              <li>3rd Ave, NSK Nagar, </li>
              <li>Anna Nagar </li>
              <li>Chennai, Tamil Nadu 600106</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>ABOUT</h4>
            <br />
            <ui className="list-unstyled">
              <li>About Us</li>
              <li>Our Team</li>
              <li>FAQ's</li>
              <li>Contact Us</li>
            </ui>
          </div>
          <div className="col">
            <h4>EMAIL US</h4>
            <br />
            <ui className="list-unstyled">
              <li>db@kinggmail.com</li>
              <li>sk@kinggmail.com</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>QUICK LINKS</h4>
            <br />
            <ui className="list-unstyled">
              <li>Terms & Conditions</li>
              <li>Shipping & Delivery Policy</li>
              <li>Cancellation Policy</li>
            </ui>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;