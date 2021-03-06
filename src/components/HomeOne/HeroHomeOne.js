import React from "react";
import heroThumbOne from "../../assets/images/two.jpg";
import heroThumbTwo from "../../assets/images/one.jpg";
import shapeTwo from "../../assets/images/shape/shape-2.png";
import shapeThree from "../../assets/images/shape/shape-3.png";
import shapeFour from "../../assets/images/shape/shape-4.png";

function HeroHomeOne() {
  return (
    <>
      <section className="appie-hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="appie-hero-content">
                <span>Welcome To C-Rentals</span>
                <h1 className="appie-title">
                 Comfortability, in FUTA new system
                </h1>
                <p>
                  A world to search for a place to rent around your college.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-hero-thumb">
                <div
                  className="thumb wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <img src={heroThumbOne} alt="" style = {{width:'310px', height:'616px',backgroundSize:' contain'}}/>
                </div>
                <div
                  className="thumb-2 wow animated fadeInRight"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <img src={heroThumbTwo} alt="" style = {{width:'150px', height:'238px'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-1">
          <img src={shapeTwo} alt="" />
        </div>
        <div className="hero-shape-2">
          <img src={shapeThree} alt="" />
        </div>
        <div className="hero-shape-3">
          <img src={shapeFour} alt="" />
        </div>
      </section>
    </>
  );
}

export default HeroHomeOne;
