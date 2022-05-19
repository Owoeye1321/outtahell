import React from "react";
import IconOne from "../../assets/images/icon/1.png";
import IconTwo from "../../assets/images/icon/2.png";
import IconThree from "../../assets/images/icon/3.png";
import IconFour from "../../assets/images/icon/4.png";

function ServicesHomeOne({ className }) {
  return (
    <section
      className={`appie-service-area pt-90 pb-100 ${className}`}
      id="service"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="appie-section-title text-center">
              <h3 className="appie-title">
                Available for <br /> all students in FUTA.
              </h3>
              <p>
                The better and best comfortability can be achieved in the
                community.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <img src={IconOne} alt="" />
                <span>1</span>
              </div>
              <h4 className="appie-title">Searching</h4>
              <p>Search for suitable places within your price range.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <img src={IconTwo} alt="" />
                <span>2</span>
              </div>
              <h4 className="appie-title">Designing</h4>
              <p>Make your home suitable and attractive to visitors.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <img src={IconThree} alt="" />
                <span>3</span>
              </div>
              <h4 className="appie-title">Building</h4>
              <p>Fixes and repair all damages in your hostels.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="800ms"
            >
              <div className="icon">
                <img src={IconFour} alt="" />
                <span>4</span>
              </div>
              <h4 className="appie-title">Suporting</h4>
              <p>FUTA provides better system to its students.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHomeOne;
