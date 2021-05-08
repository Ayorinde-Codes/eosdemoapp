import React, {useEffect, useState} from 'react'
import Header from './header';
import { Link, Redirect } from 'react-router-dom';
import Footer from './footer';

import validate from './validation/FormValidationRules';

import { Card, Logo, Form, Success, Input, Button, Error } from "./AuthForms";

import FlashMessage from 'react-flash-message'


export default function ChooseTime() {
    
    const [fullName, setFullName] = useState("Michael Scofield");
    const [email, setEmail] = useState("michael@gmail.com");
	const [address, setAddress] = useState("31,Adekoya close Ikoyi");
    const [phone, setPhone]= useState("08079552377");
    const [city, setCity]= useState('Lagos');    
    const [lga, setLga]= useState('Isale Eko');    
    const [description, setDescription]= useState('');    
    const [selectAilment, setSelectAilment]= useState('');    


	const [isError, setIsError] = useState(false);
    const [disabled, setDisasbled] = useState(false)
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("green");
    
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState('');

    const [message, setMessage] = useState('');
    const [isSucess, setIsSucess] = useState(false);



    const postAppointment = (e) => {
		e.preventDefault();

		var data = {
            fullName,
            email,
            address,
            phone,
            city,
            lga,
            description,
            selectAilment,
		}
		
        let handleError = validate(data)

        if (handleError)
        {
            setErrors(handleError);
        }
        

        setIsSucess(true)
        setMessage('Submitted Successfully');

	  }
	


     
    
    
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

            {isSucess ? (<div> <FlashMessage duration={5000}> <Success>{message}</Success> </FlashMessage><Redirect to="/book_appointment" /> </div>) : ''}



            <form onSubmit={postAppointment}>

                <div className="col">
                    <div className="row">

             
                        <div className="col-xl-6 form-group">
                                <div className="submit-field">
                                        <div className="input-with-icon">
                                                <h6> Available Time </h6>
                                            <select value={selectAilment} onChange={e => {setSelectAilment(e.target.value);}} placeholder="Select the organization from the drop-down list" >
                                                    <option value="hospital1"> 2021-05-02 </option> 
                                                    <option value="hospital2"> 2021-05-02 </option> 
                                                    <option value="hospital2"> 2021-05-02 </option> 
                                                    <option value="hospital2"> 2021-05-02 </option> 
                                            </select>
                                        </div>
                                </div>
                        </div>

                        <div className="col-xl-6 form-group">
                                <div className="submit-field">
                                        <div className="input-with-icon">
                                                <h6> Doctors </h6>
                                            <select value={selectAilment} onChange={e => {setSelectAilment(e.target.value);}} placeholder="Select the organization from the drop-down list" >
                                                    <option value="hospital1"> Doctor 1 </option> 
                                                    <option value="hospital2"> Doctor 2 </option> 
                                                    <option value="hospital2"> Doctor 3 </option> 
                                                    <option value="hospital2"> Doctor 4 </option> 
                                                    <option value="hospital2"> Doctor 5 </option> 
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
