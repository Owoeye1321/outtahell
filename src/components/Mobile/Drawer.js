import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Drawer({ drawer, action }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("home");
  const handler = (e, value) => {
    e.preventDefault();
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (getItems > 0) {
      setSize(`${43 * getItems}px`);
      setItem(value);
    }
  };
  return (
    <>
      <div
        onClick={(e) => action(e)}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <div className="canvas_close">
                  <a href="#" onClick={(e) => action(e)}>
                    <i className="fa fa-times"></i>
                  </a>
                </div>
                <div className="offcanvas-brand text-center mb-40">
                  <img src={logo} alt="" />
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li
                      onClick={(e) => handler(e, "home")}
                      id="home"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand"></span>
                      <a href="/">Home</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "service")}
                      id="service"
                      className="menu-item-has-children active"
                    >
                      <Link to="/service">Service</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "about-us")}
                      id="about-us"
                      className="menu-item-has-children active"
                    >
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contact")}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "view_available_hostels-hostels")}
                      id="view_available_hostels"
                      className="menu-item-has-children active"
                    >
                      <Link to="/view_available_hostels">View Hostels</Link>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="$">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fal fa-envelope"></i>{" "}
                        support@c-rentals.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-phone"></i> +(234) 915 344 4158
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-map-marker-alt"></i>
                        Kwara State University
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
