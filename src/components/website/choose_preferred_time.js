import React, {useEffect, useState} from 'react'
import Header from './header';
import { Link, Redirect } from 'react-router-dom';
import Footer from './footer';

import validate from './validation/FormValidationRules';

import { Card, Logo, Form, Success, Input, Button, Error } from "./AuthForms";

import FlashMessage from 'react-flash-message'

import axios from "axios";
const _ = require('lodash');
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function ChooseTime(props) {
    

    const [doctors, setDoctors]= useState([]);
       
    const [selectDoctors, setSelectDoctors]= useState('');    
	const [appointmentDate, setAppointmentDate] = useState(new Date());


	const [isError, setIsError] = useState(false);
    const [disabled, setDisasbled] = useState(false)
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("green");
    
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState('');

    const [message, setMessage] = useState('');
    const [isSucess, setIsSucess] = useState(false);

    const [state, setState] = useState('');
    const [state2, setState2] = useState('');


    useEffect(() => { 
        getDoctors();
        setState2(props.location.state.property_state);


      }, []);

    //   const getDoctors = () => {
    //     axios.get('https://cors-anywhere.herokuapp.com/http://api.health.staging.ekoopenbuild.com/doctors', {
    //         headers: {
    //             'Authorisation': ``,
    //         }
    //       })
    //     .then(result => {
    //         setDoctors(result.data.OCXPayload.data.data)
                
    //     }).catch(err =>{
    //         // setMessage(err.response.data.message)
    //         // console.log(err.response.statusText); 
    //     })

    const getDoctors = () => {
        axios.get('../../../public/json/doctors.json', {
          })
        .then(result => {
            console.log(result.data)
            setDoctors(result.data)
                
        }).catch(err =>{
        })
  }


    const postAppointment = (e) => {
		e.preventDefault();

		let appointment_date = new Date(appointmentDate).toISOString();

		var data = {
            selectDoctors,
            appointment_date,
            AppointmentState: state2,            

		}
		
        let handleError = validate(data)

        if (handleError)
        {
            setErrors(handleError);
        }
        
        setState(data)

        setIsSucess(true)
        setMessage('Submitted Successfully');

	  }
	


      let selectedDoctors = (doctors && doctors.map( (data, index) => { return <option key={index} value={data.firstname}> {data.firstname} {data.lastname} </option> }) )


    
      const checkboxHandler = () => {
        setConsent(!consent); 
      }


    
    
    return (
        <div>
            <Header />
            <section className="hero-banner d-flex align-items-center">
                <div className="container text-center">
                    <h2>Hospital Appointment Booking</h2>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/'}> Home </Link></li>
                    <li className="breadcrumb-item active" aria-current="page"> Choose Preferred Time And Personnel </li>
                    </ol>
                    </nav>
                </div>
            </section>


            <div className="container mg-top mg-btm">

            {isSucess ? (<div> <FlashMessage duration={5000}> <Success>{message}</Success> </FlashMessage> <Redirect to={{ pathname : "/book_appointment", state: {property_state: state} }}/> </div>) : ''}



            <form onSubmit={postAppointment}>

                <div className="col">
                    <div className="row">

             
                        <div className="col-xl-6 form-group">
                                <div className="submit-field">
                                        <div className="input-with-icon">
                                                <h6> Available Time </h6>
												<DatePicker  dateFormat="yyyy-MM-dd" selected={appointmentDate} onChange={date => setAppointmentDate(date)} />
                                        </div>
                                </div>
                        </div>

                        <div className="col-xl-6 form-group">
                                <div className="submit-field">
                                        <div className="input-with-icon">
                                                <h6> Doctors </h6>
                                            <select value={selectDoctors} onChange={e => {setSelectDoctors(e.target.value);}} placeholder="Select the organization from the drop-down list" >
                                                    {selectedDoctors} 
                                            </select>
                                        </div>
                                </div>
                        </div>

                    </div>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit" > Finalize Appointment </button>

            </form>

            </div>

            <Footer />
        </div>
    )
}
