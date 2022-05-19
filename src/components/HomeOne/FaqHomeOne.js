import React, { useState } from "react";

function FaqHomeOne({ className }) {
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => {
    setQues(value);
  };
  return (
    <>
      <section className={`appie-faq-area pb-95 ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Frequently asked questions</h3>
                <p>Guides in serching for good accomodation without stress.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp animated fadeIn faq-accrodion wow"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  <div
                    onClick={() => openQuestion(1)}
                    className={`accrodion ${showQues === 1 ? "active" : ""}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>Who do i pay my accomodation fee to?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{
                          display: showQues === 1 ? "block" : "none",
                        }}
                      >
                        <div className="inner">
                          <p>
                            You would find the contact of the agent in charge of
                            the hostel seen, call or either him and meet him in
                            person before payment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => openQuestion(2)}
                    className={`accrodion ${showQues === 2 ? "active" : ""}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>What is the procedure for checking in?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{
                          display: showQues === 2 ? "block" : "none",
                        }}
                      >
                        <div className="inner">
                          <p>
                            The agent would give you the key to your hostel
                            immediately you make the payment to him.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp animated fadeIn faq-accrodion wow"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  <div
                    onClick={() => openQuestion(3)}
                    className={`accrodion ${showQues === 3 ? "active" : ""}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>
                          What if the features are not present in the hostel?
                        </h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{
                          display: showQues === 3 ? "block" : "none",
                        }}
                      >
                        <div className="inner">
                          <p>
                            After checking the hostel and the features are not
                            provided, you can decline the process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => openQuestion(4)}
                    className={`accrodion ${showQues === 4 ? "active" : ""}`}
                  >
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>What if i am scammed by an agent?</h4>
                      </div>
                      <div
                        className="accrodion-content"
                        style={{
                          display: showQues === 4 ? "block" : "none",
                        }}
                      >
                        <div className="inner">
                          <p>Contact us immediately</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="faq-text text-center pt-40">
                <p>
                  Can't find an answer?{" "}
                  <a href="cyberxurde@gmail.com">Email us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqHomeOne;
