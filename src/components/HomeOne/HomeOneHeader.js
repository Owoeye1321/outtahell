import React, { useEffect } from "react";
import logo from "../../assets/images/see.svg";
import { Link } from "react-router-dom";
import StickyMenu from "../../lib/StickyMenu";
import Navigation from "../Navigation";

function HomeOneHeader({ action }) {
  useEffect(() => {
    StickyMenu();
  }, []);
  return (
    <header className="appie-header-area appie-sticky">
      <div className="container">
        <div className="header-nav-box">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
              <div className="appie-logo-box">
                <a href="/">
                  <img
                    src={logo}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                  <strong style={{ color: "blue", fontSize: "20px" }}>
                    {" "}
                    <strong style={{ color: "black", height: "50px" }}>
                      -
                    </strong>{" "}
                    Rentals
                  </strong>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
              <div className="appie-header-main-menu">
                <Navigation />
              </div>
            </div>
            <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
              <div className="appie-btn-box text-right">
                <Link className="login-btn" to="/dashboard">
                  <i className="fal fa-user" />
                </Link>
                <Link className="main-btn ml-30" to="/view_available_hostels">
                  View Hostels
                </Link>
                <div
                  onClick={(e) => action(e)}
                  className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                >
                  <i className="fa fa-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeOneHeader;
