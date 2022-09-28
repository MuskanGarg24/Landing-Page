import React from "react";
import "./Mentors.css";
import Profile from "../../assets/profile.jpg";

const Mentors = () => {
    return (
        <>
            <section id="mentors-section">
                <h1 className="services-heading color-blue">Who will train you?</h1>
                <h5 className="services-heading color-black">
                    Tutor Master will cover the following topics
                </h5>
                <div className="mentors-section">
                    <div className="row">
                        <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="mentors">
                                <div className="row">
                                    <div className="col col-lg-4 col-md-6 col-sm-8 col-xs-6 image-div">
                                        <img
                                            src={Profile}
                                            alt="profile"
                                            className="profile-image img-fluid"
                                        ></img>
                                    </div>
                                    <div className="col col-lg-8 col-md-6 col-sm-4 col-xs-6 mentor-info">
                                        <h1 className="mentor-name">James Williams</h1>
                                        <p className="mentor-degree">
                                            BSc MSc <br></br>Cardiology
                                        </p>
                                        <p className="read-more">Know More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="mentors">
                                <div className="row">
                                    <div className="col col-lg-4 col-md-6 col-sm-6 col-xs-6 image-div">
                                        <img
                                            src={Profile}
                                            alt="profile"
                                            className="profile-image img-fluid"
                                        ></img>
                                    </div>
                                    <div className="col col-lg-8 col-md-6 col-sm-6 col-xs-6 mentor-info">
                                        <h1 className="mentor-name">James Williams</h1>
                                        <p className="mentor-degree">
                                            BSc MSc <br></br>Cardiology
                                        </p>
                                        <p className="read-more">Know More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="mentors">
                                <div className="row">
                                    <div className="col col-lg-4 col-md-6 col-sm-6 col-xs-6 image-div">
                                        <img
                                            src={Profile}
                                            alt="profile"
                                            className="profile-image img-fluid"
                                        ></img>
                                    </div>
                                    <div className="col col-lg-8 col-md-6 col-sm-6 col-xs-6 mentor-info">
                                        <h1 className="mentor-name">James Williams</h1>
                                        <p className="mentor-degree">
                                            BSc MSc <br></br>Cardiology
                                        </p>
                                        <p className="read-more">Know More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="mentors">
                                <div className="row">
                                    <div className="col col-lg-4 col-md-6 col-sm-6 col-xs-6 image-div">
                                        <img
                                            src={Profile}
                                            alt="profile"
                                            className="profile-image img-fluid"
                                        ></img>
                                    </div>
                                    <div className="col col-lg-8 col-md-6 col-sm-6 col-xs-6 mentor-info">
                                        <h1 className="mentor-name">James Williams</h1>
                                        <p className="mentor-degree">
                                            BSc MSc <br></br>Cardiology
                                        </p>
                                        <p className="read-more">Know More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Mentors;
