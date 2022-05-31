import React from "react";
import teamOne from "../../assets/images/Ceo1.jpg";
import teamTwo from "../../assets/images/Ceo2.jpeg";

function TeamHomeOne() {
  return (
    <>
      <section className="appie-team-area pt-90 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Founders</h3>
                <p>Different layouts and styles for team sections.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-team-item mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="thumb" style={{ borderRadius: "10px" }}>
                  <img
                    src={teamOne}
                    alt=""
                    style={{
                      height: "410px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <ul>
                    <li>
                      <a href="https://web.facebook.com/olotu.michael.14">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/semz01">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/olotu-michael-936553221/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/olotu_michael/?hl=en">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content text-center">
                  <h5 className="title">Michael</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-team-item mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="thumb" style={{ borderRadius: "10px" }}>
                  <img
                    src={teamTwo}
                    alt=""
                    style={{
                      height: "410px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100077086202151">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/@OwoeyeSO1170516">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/in/owoeye-samuel-72612918">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/oluwatobilobaowoeye">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content text-center">
                  <h5 className="title">Samuel</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamHomeOne;
