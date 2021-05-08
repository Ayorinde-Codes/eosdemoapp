import React, {useEffect, useState} from 'react'
import Header from './header';
import { Link, Redirect } from 'react-router-dom';
import Footer from './footer';

import validate from './validation/FormValidationRules';

import { Card, Logo, Form, Success, Input, Button, Error } from "./AuthForms";

import FlashMessage from 'react-flash-message'


export default function AboutYourAppointment(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState("michael@gmail.com");
	const [address, setAddress] = useState('');
    // const [phone, setPhone]= useState("08079552377");
    // const [city, setCity]= useState('Lagos');    
    // const [lga, setLga]= useState('Isale Eko');    
    const [lasGidiId, setLasGidiId]= useState('');    
    // const [selectAilment, setSelectAilment]= useState('');    
    const [state, setState] = useState('');
    // const [state2, setState2] = useState('');


	const [isError, setIsError] = useState(false);
    const [disabled, setDisasbled] = useState(false)
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("green");
    
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState('');

    const [message, setMessage] = useState('');
    const [isSucess, setIsSucess] = useState(false);

    
    useEffect(() => { 
                setFirstName(props.location.state.property_state.firstname )
                setLastName(props.location.state.property_state.lastname )
                setAddress(props.location.state.property_state.address )
                setLasGidiId(props.location.state.property_state.lasgidi_id )
                setState(props.location.state.property_state);


      }, []);




    const postAppointment = (e) => {
		e.preventDefault();

		var data = {
            firstName,
            lastName,
            address,
            lasGidiId,
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
                    <li className="breadcrumb-item active" aria-current="page"> Tell us about your appointment</li>
                    </ol>
                    </nav>
                </div>
            </section>


            <div className="container mg-top mg-btm">

            {isSucess ? (<div> <FlashMessage duration={5000}> <Success>{message}</Success> </FlashMessage> <Redirect to={{ pathname : "/choose_hospital", state: {property_state: state} }}/> </div>) : ''}


            <form onSubmit={postAppointment}>

                <div className="col">
                    <div className="row">

                        <div className="col-xl-6 form-group">
                            <label htmlFor="fullname"> LASGIDI ID</label>
                            {/* <p> {info && info.firstname} </p> */}
                                <input type="text" name="FullName" id="fullname"  value={lasGidiId} onChange={e => {setLasGidiId(e.target.value);}} className={` with-border`} readOnly />
                        </div>

                        <div className="col-xl-6 form-group">
                            <label htmlFor="fullname"> First Name</label>
                            {/* <p> {info && info.firstname} </p> */}
                                <input type="text" name="FullName" id="fullname"  value={firstName} onChange={e => {setFirstName(e.target.value);}} className={` with-border`} readOnly />
                        </div>

                        <div className="col-xl-6 form-group">
                            <label htmlFor="fullname"> Last Name</label>
                            {/* <p> {info && info.firstname} </p> */}
                                <input type="text" name="FullName" id="fullname"  value={lastName} onChange={e => {setLastName(e.target.value);}} className={` with-border`} readOnly />
                        </div>


                        {/* <div className="col-xl-6 form-group">
                        <label htmlFor="email"> Email </label>
                            <input 
                                type="text" 
                                className={`input ${errors.email && 'border border-danger'} with-border`} 
                                name="email" 
                                id="email"
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}  id="emailaddress" readOnly  />

                                {errors.email && (
                                    <p className="text-danger">{errors.email}</p>
                                 )}
                        </div> */}
                                                
                        {/* <div className="col-xl-6 form-group">
                        <label htmlFor="phone"> Phone </label>
                                <input name="phone"  value={phone} onChange={e => {setPhone(e.target.value);}} className={`input ${errors.phone && 'border border-danger'} with-border`} id="phone" type="number" readOnly />
                                {errors.phone && (
                                    <p className="text-danger">{errors.phone}</p>
                                )}
                        </div>


                        <div className="col-xl-6 form-group">
                        <label htmlFor="city"> City </label>
                                <input type="text" name="city"  id="city" value={city} onChange={e => {setCity(e.target.value);}} className={`input ${errors.city && 'border border-danger'} with-border`} readOnly  />
                                {errors.city && (
                                    <p className="text-danger">{errors.city}</p>
                                 )}
                        </div>


                        <div className="col-xl-6 form-group">
                            <label htmlFor="lga"> LGA </label>
                                <input type="text" name="lga" id="lga"  value={lga} onChange={e => {setLga(e.target.value);}} className={`input ${errors.city && 'border border-danger'} with-border`} readOnly  />
                                {errors.city && (
                                    <p className="text-danger">{errors.city}</p>
                                 )}
                        </div>

                        <div className="col-xl-6 form-group">
                                <div className="submit-field">
                                            <div className="input-with-icon">
                                                <h6> Possible Ailment </h6>
                                            <select value={selectAilment} onChange={e => {setSelectAilment(e.target.value);}} placeholder="Select the organization from the drop-down list" >
                                                    <option value="x-ray"> Radiology (X-rays) </option> 
                                                    <option value="gynaecology"> Gynaecology </option> 
                                                </select>
                                                <i className="icon-material-outline-business-center"></i>
                                            </div>
                                </div>
                        </div>

                        <div className="col-xl-6 form-group">
                        <label htmlFor="description"> More Details </label>

                                <textarea cols="30" value={description} onChange={e => {setDescription(e.target.value);}}   rows="5" name="address"  id="description" placeholder="Describe in more details what you would like to see a doctor for" className="with-border" required></textarea>
                        </div>
*/}
                        <div className="col-xl-6 form-group">
                        <label htmlFor="address"> Address </label>

                                <textarea cols="30" value={address} onChange={e => {setAddress(e.target.value);}}   rows="5" name="address" id="address" placeholder="Address" className="with-border" readOnly></textarea>
                        </div> 


                        <button className="btn btn-primary btn-block" type="submit"> Check Available Hospitals </button>


                        </div>
                    </div>
            </form>


            </div>

            <Footer />
        </div>
    )
}
