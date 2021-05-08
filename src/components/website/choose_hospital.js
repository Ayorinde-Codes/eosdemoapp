import React, {useEffect, useState} from 'react'
import Header from './header';
import { Link, Redirect } from 'react-router-dom';
import Footer from './footer';

import validate from './validation/FormValidationRules';

import { Card, Logo, Form, Success, Input, Button, Error } from "./AuthForms";

import FlashMessage from 'react-flash-message'


export default function ChooseHospital() {
    
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
                    <li className="breadcrumb-item active" aria-current="page"> Choose Hospital</li>
                    </ol>
                    </nav>
                </div>
            </section>


            <div className="container mg-top">

            {isSucess ? (<div> <FlashMessage duration={5000}> <Success>{message}</Success> </FlashMessage><Redirect to="/choose_time_personnel" /> </div>) : ''}



            <form onSubmit={postAppointment}>

                <div className="col">
                    <div className="row">

                    <div className="choices">

                        <div className="choice">
                            <input type="radio" name="answer" id="radio2" value="2" /> 
                            <label htmlFor="radio2">Hospital 1</label>
                        </div>
<br />
                        <div className="choice">
                            <input type="radio" name="answer" id="radio3" value="3" />
                            <label htmlFor="radio3">Hospital 2</label>
                        </div>
                        
                        <div className="choice4">
                            <input type="radio" name="answer" id="radio4" value="4" />
                            <label htmlFor="radio4">Hospital 3</label>
                        </div>
                        
                        <button className="btn btn-primary btn-block" type="submit" > Check Available Time & Personnel </button>

                    </div>

                        {/* <div className="col-xl-6 form-group">  book_appointment
                                <div className="submit-field">
                                            <div className="input-with-icon">
                                                <h6> Hospital List </h6>
                                            <select value={selectAilment} onChange={e => {setSelectAilment(e.target.value);}} placeholder="Select the organization from the drop-down list" >
                                                    <option value="hospital1"> Hospital 1 </option> 
                                                    <option value="hospital2"> Hospital 2 </option> 
                                                </select>
                                                <i className="icon-material-outline-business-center"></i>
                                            </div>
                                </div>
                        </div> */}

                    </div>
                    </div>
            </form>

            </div>

            <Footer />
        </div>
    )
}
