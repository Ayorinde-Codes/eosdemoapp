import React, {useEffect, useState} from 'react'
import Header from './header';
import { Link, Redirect } from 'react-router-dom';
import Footer from './footer';

import validate from './validation/FormValidationRules';

import { Card, Logo, Form, Success, Input, Button, Error } from "./AuthForms";

import FlashMessage from 'react-flash-message'
import axios from "axios";
const _ = require('lodash');

  


export default function ChooseHospital(props) {
    

    const [hospitals, setHospitals]= useState([]);
   
    const [hospitalData, setHospitalData] = useState('');    

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
        getHospitals();
        setState2(props.location.state.property_state);


      }, []);

//       const getHospitals = () => {
//         axios.get('https://cors-anywhere.herokuapp.com/https://api.health.staging.ekoopenbuild.com/hospitals', {
//             headers: {
//                 'Authorisation': ``,
//             }
//           })
//         .then(result => {
//             console.log(result.data.OCXPayload.data.data)
//             setHospitals(result.data.OCXPayload.data.data)
                
//         }).catch(err =>{
//             // setMessage(err.response.data.message)
//             // console.log(err.response.statusText); 
//         })
//   }


  const getHospitals = () => {
    axios.get('../../../public/json/hospitals.json', {
        headers: {
            'Authorisation': ``,
        }
      })
    .then(result => {
        console.log(result.data)
        setHospitals(result.data)
            
    }).catch(err =>{
        // setMessage(err.response.data.message)
        // console.log(err.response.statusText); 
    })
}

  const findValue = (arr, value) => {
    return _.find(arr, (elem) => {
        return elem.uuid ? elem.uuid === value : elem.name === value;
    });
}

    const postAppointment = (e) => {
		e.preventDefault();

        let hospitali = findValue(hospitals, hospitalData)

		var data = {
            hospitalData: hospitali,
            hospitalDataState: state2,            
		}
		
        setState(data)
      
        setIsSucess(true)
        setMessage('Submitted Successfully');

	  }
	
      const checkboxHandler = () => {
        setConsent(!consent);        
      }
    
      const hospitalList = hospitals && hospitals.map(({uuid, speciality, name, lga, address}) => {
        return (<div key={uuid}>
                <input
                type="radio"
                name="dynamic-radio"
                id={uuid}
                value={uuid}
                checked={hospitalData === uuid}
                onChange={e => {setHospitalData(e.target.value);}}
                />
                <label htmlFor={uuid}>
                 <p> Name: {name.toUpperCase()} </p>
                 <p>  Lga: {lga} </p>
                 <p>  Address: {address} </p>
                </label>
            </div>)
    })

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

            {isSucess ? (<div> <FlashMessage duration={5000}> <Success>{message}</Success> </FlashMessage> <Redirect to={{ pathname : "/choose_time_personnel", state: {property_state: state} }}/> </div>) : ''}



            <form onSubmit={postAppointment}>

                <div className="col">
                    <div className="row">

                    <div className="choices">

                         {hospitalList}

                        <button className="btn btn-primary btn-block" type="submit" > Check Available Time & Personnel </button>
                    </div>

                    </div>
                    </div>
            </form>

            </div>
            <br />

            <Footer />
        </div>
    )
}
