import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">
            Rentals <i className="fal fa-angle-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <Link to="/northgate">North Gate</Link>
            </li>
            <li>
              <Link to="/southgate">South Gate</Link>
            </li>
            <li>
              <Link to="/westgate">West Gate</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
