import React from "react";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";

function TeamAbout() {
  return (
    <>
      <section className="appie-team-area appie-team-about-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Team Members</h3>
                <p>Meet our Team Members.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="thumb">
                  <img src={team1} alt="" />
                </div>
                <div className="content text-left">
                  <h5 className="title">Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="thumb">
                  <img src={team2} alt="" />
                </div>
                <div className="content text-left">
                  <h5 className="title">Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="thumb">
                  <img src={team3} alt="" />
                </div>
                <div className="content text-left">
                  <h5 className="title">Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="800ms"
              >
                <div className="thumb">
                  <img src={team4} alt="" />
                </div>
                <div className="content text-left">
                  <h5 className="title">Benjamin Evalent</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="team-btn text-center mt-50">
                <a className="main-btn" href="#">
                  View all Members <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamAbout;
