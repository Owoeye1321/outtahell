import React from "react";
import IconOne from "../../assets/images/k4.jpg";
import IconTwo from "../../assets/images/k3.jpg";
import IconThree from "../../assets/images/k5.jpg";
import IconFour from "../../assets/images/k7.jpg";

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
                Available for <br /> The students in KWASU.
              </h3>
              <p>
               The better and best comfortability can be achieved in the community.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
              style={{width:'100%', height:'100%'}}
            >
                <img src={IconOne} style={{width:'100%', height:'100%'}}/>

            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service  item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
              style={{width:'100%', height:'100%'}}
            >

                <img src={IconTwo} alt="" style={{width:'100%', height:'100%'}}/>

            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
              style={{width:'100%', height:'100%'}}
            >

                <img src={IconThree} alt="" style={{width:'100%', height:'100%'}}/>

            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service item-4 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="800ms"
              style={{width:'100%', height:'100%'}}
            >

                <img src={IconFour} alt="" style={{width:'100%', height:'100%'}}/>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHomeOne;
