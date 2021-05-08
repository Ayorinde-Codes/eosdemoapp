import React from 'react'

export default function Banner() {
    return (
        <div>
            {/* <section className="home_banner_area" > */}
            <section className="home_banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                            {/* offset-lg-6 col-xl-5 offset-xl-7 */}
                                <div className="banner_content">
                                    <h3>Hospital Appointment Booking App</h3>
                                    <p>This Demo App is a light demo that showcases the ease of working with the EOS Sandbox data nodes.
                                        The app is a simple 5 page Hospital Appointment Booking utility that synchronises with data from multiple civic  service nodes.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <img className="img-fluid" src="/assets/images/appointment.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
