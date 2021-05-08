import React, {useEffect, useState} from 'react'
import Header from './header';
import { Link, Redirect } from 'react-router-dom';
import Footer from './footer';

import validate from './validation/FormValidationRules';

import { Card, Logo, Form, Success, Input, Button, Error } from "./AuthForms";

import FlashMessage from 'react-flash-message'


export default function BookAppointment() {


    
    
    return (
        <div>
            <Header />
            <section className="hero-banner d-flex align-items-center">
                <div className="container text-center">
                    <h2>Hospital Appointment Booking</h2>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/'}> Home </Link></li>
                    <li className="breadcrumb-item active" aria-current="page"> Appointment Booked </li>
                    </ol>
                    </nav>
                </div>
            </section>


            <div className="container mg-top mg-btm">

                <div className="row">
                    <div className="col-md-6">


                    <img src="/assets/images/successful.png" />
                    </div>
    
                    <div className="col-md-6">
                        

                {/* <h2> Thank you </h2> */}

                <div className="card" style={{width: "18rem" }} align="center">
                            {/* <img className="card-img-top" src="..." alt="Card image cap">  "list-style-type:square"*/}
                            <div className="card-body">
                                <h5 className="card-title">Appointment ID: </h5>
                                <p className="card-text">
                                         All Appointment Details
                                    <ul style={{listStyleType: "square"}}>
                                        {/* <li> </li> */}
                                          <li>  biodataofresident: </li> 
                                          <li>  issue: </li>
                                          <li>  comments: </li>
                                          <li>  hospital name: </li>
                                          <li>  time: </li>
                                        <li> doctors name: </li>
                                        <li>Tea</li>
                                        <li>Milk</li>
                                    </ul>
                                </p>
                                <Link to={'/individual_registration'}> <button className="btn btn-primary"> StartAgain </button> </Link>

                            </div>
                            </div>

                            </div>

                </div>
                         {/* <h2> </h2>   Thank you message and Data showing appointment ID (random
                            generated) 
                            Allappointmentdetails,
                            biodataofresident,
                            issue,
                            comments,
                            hospital name, 
                            time and 
                            doctors name
– 1buttons[StartAgain].Thisgoestopage1
                            
                            */}

                            


            </div>

            <Footer />
        </div>
    )
}
