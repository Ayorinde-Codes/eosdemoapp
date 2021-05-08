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
                                    <h3>Hospital Appointment Booking</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
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
