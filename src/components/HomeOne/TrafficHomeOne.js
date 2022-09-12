import React from 'react';
import thumb from '../../assets/images/k2.jpg';

function TrafficHomeOne() {
    return (
        <section className="appie-traffic-area pt-140 pb-180">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            <span>Traffic</span>
                            <h3 className="title">Payment must not be made in person.</h3>
                            <p>
                                C-rentals advises you not to pay to any individuals except it's from a valid agent sourse.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Carefully designed</h5>
                                    <p>All hostels on here are the best in FUTA .</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Choose a location</h5>
                                    <p>All the hostels in the locations are available.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Checking in</h5>
                                    <p>Check in at your hostels after Payment.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">User Interactive</h5>
                                    <p>C-rentals helps student for ease acces.</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb mb-3">
                <img style = {{width:'846', height:"677px"}}
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src={thumb}
                    alt=""
                />
            </div>
        </section>
    );
}

export default TrafficHomeOne;
