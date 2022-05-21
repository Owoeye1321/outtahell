import React from 'react';
import thumb from '../../assets/images/two.jpg';

function DetailsService() {
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-details-sidebar mr-50">
                                <div className="service-category-widget">
                                    <ul>
                                        <li>
                                            <i className="fal fa-home"></i>Affordable
                                        </li>
                                        <li>
                                            <i className="fal fa-tag"></i>Secured
                                        </li>
                                        <li>
                                            <i className="fal fa-user-friends"></i>10 - 15 Agents
                                        </li>
                                        <li>
                                            <i className="fal fa-bookmark"></i>C - Rentals
                                        </li>
                                        <li>
                                            <i className="fal fa-globe"></i>www.C-Rentals.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <div className="thumb">
                                   <img src={thumb} alt="" style = {{width:'770px', height:'450px',backgroundSize:' contain'}}/>
                                </div>
                                <div className="content">
                                    <h3 className="title">What we're Building</h3>
                                    <p>
                                        Introducing easy access to accomodation with simplicity
                                        and stressfree scheme that guarantee student well being
                                        here in FUTA and its locations. However, C-Rentals allows
                                        agent in FUTA to enhance their business scope to reach a wider range.
                                    </p>
                                    <span>
                                       We provide affordable hostels with social amenities 
                                       that are essential to student in FUTA for better productivity.
                                    </span>
                                    <p>
                                        Essential social amenities like good power supply, reliable 
                                        water supply,consusive environment and good internet network.
                                        Student can report any emmergency or bad act in the hostel to 
                                        C-Rentals through the contact page and respective individuals
                                        or agent in charge would be informed and action would be taken. 
                                        All student are advised to stay safe and free from danger or 
                                        materials and that could cause harm. However, student are 
                                        restricted from the electricity room or power house.
                                        Student in engineering should not try an error or a pratical
                                        in the power house as it could cause danger to them and anyone.
                                        It is very essential that all student amenities are provided
                                        as it was agreed before payment to agent and respective individuals,
                                        Agents in FUTA are advised to register on C-rentals to enhance their 
                                        business advert,as it would increase their client range and breaking
                                        the barrier of looking for client.However all agents must undergo 
                                        a verification process before becoming as admin at C-rentals.
                                        We provide identification to all admin in C-rentals for verification,
                                        We advise all client to pay only on-site to the agent and the key should be
                                        delivered to student immediately the payment has been made.
                                        All activities outside C-Rentals are at your own risk.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsService;
