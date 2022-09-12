import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/see.svg";

function FooterHomeOne({ className }) {
  return (
    <>
      <section className={`appie-footer-area ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget">
                <div className="logo">
                  <a href="#">
                  <img src={logo} alt="" style = {{width:'40px', height:'40px'}}/>
                                    <strong style ={{color:'blue', fontSize:'20px'}}> <strong style ={{color:'black', height:'50px'}}>-</strong> Rentals</strong>
                              </a>
                </div>
                <p>
                C-rentals is the best hostel provider you will ever have.
                </p>
               
                <div className="social mt-30">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">Company</h4>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Service">Service</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">Get In Touch</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fal fa-envelope" /> support@c-rentals.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-phone" /> +(234) 915 346 4158
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-map-marker-alt" />
                     Kwara State University, Malete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright d-flex align-items-center justify-content-center pt-35">
                <div className="copyright-text">
                  <p>Copyright © 2021 C-Rentals. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterHomeOne;
