import React from "react";
import teamOne from "../../assets/images/team-1.jpg";
import teamTwo from "../../assets/images/team-2.jpg";
import teamThree from "../../assets/images/team-3.jpg";
import teamFour from "../../assets/images/team-4.jpg";

function BlogHomeOne() {
  return (
    <>
      <section className="appie-team-area pt-90 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Meet our Team Members</h3>
                <p>Different layouts and styles for team sections.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="thumb">
                  <img src={teamOne} alt="" />
                </div>
                <div className="content text-center">
                  <h5 className="title">Tunji</h5>
                  <span>Team Member</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="thumb">
                  <img src={teamTwo} alt="" />
                </div>
                <div className="content text-center">
                  <h5 className="title">Rofiat</h5>
                  <span>Team Member</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="thumb">
                  <img src={teamThree} alt="" />
                </div>
                <div className="content text-center">
                  <h5 className="title">David</h5>
                  <span>Team Member</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="800ms"
              >
                <div className="thumb">
                  <img src={teamFour} alt="" />
                </div>
                <div className="content text-center">
                  <h5 className="title">Chibuike</h5>
                  <span>Team Member</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="team-btn text-center mt-50">
                <a className="main-btn" href="#">
                  {" "}
                  View all Members <i className="fal fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogHomeOne;
