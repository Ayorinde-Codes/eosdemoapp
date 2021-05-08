import React, {useEffect, useState} from 'react'
import Header from './header';
import { Link, Redirect } from 'react-router-dom';
import Footer from './footer';

import validate from './validation/FormValidationRules';

import { Card, Logo, Form, Success, Input, Button, Error } from "./AuthForms";

import FlashMessage from 'react-flash-message'


export default function BookAppointment(props) {


    const [state, setState] = useState('');

    
    useEffect(() => { 
        setState(props.location.state.property_state);
      }, []);


      	function makeid(){
		var result           = '';
		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < 5; i++ ) {
		   result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	 };


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
                        

                <div className="card" style={{width: "18rem" }} align="center">

                            <div className="card-body">
                                <p className="card-text">
                                         All Appointment Details
                                </p>

                                    <ul style={{listStyleType: "square"}}>

                                          <b>  Bio Data Of Resident: </b> 
                                          <li>  <p>Appointment Id: {makeid()} </p></li> 
                                          <li>  <p>Lasgidi Id: {state.AppointmentState ? state.AppointmentState.hospitalDataState.lasgidi_id : ''} </p></li>
                                          <li>  <p>Firstname: {state.AppointmentState ?  state.AppointmentState.hospitalDataState.firstname : ''} </p></li>
                                          <li>  <p>LastName: {state.AppointmentState ? state.AppointmentState.hospitalDataState.lastname : ''} </p></li>
                                          <li>  <p>User Address: {state.AppointmentState ? state.AppointmentState.hospitalDataState.address : ''} </p></li>
                                          <li>  <p>hospital name: {state.AppointmentState ?  state.AppointmentState.hospitalData.name : ''} </p></li>
                                          <li>  <p>hospital Address: {state.AppointmentState ?  state.AppointmentState.hospitalData.address : ''} </p></li>
                                          <li>  <p>hospital Speciality: {state.AppointmentState ? state.AppointmentState.hospitalData.speciality : ''} </p></li>
                                          <li>  <p>time: {state.appointment_date} </p></li>
                                        <li> <p>doctors name: {state.selectDoctors} </p></li> 
                                    </ul>
                                <Link to={'/individual_registration'}> <button className="btn btn-primary"> StartAgain </button> </Link>

                            </div>
                            </div>

                            </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

