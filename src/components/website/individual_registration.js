import React, {useEffect, useState} from 'react'
import Header from './header';
import { Link, Redirect } from 'react-router-dom';
import Footer from './footer';

import validate from './validation/FormValidationRules';

import { Card, Logo, Form, Success, Input, Button, Error } from "./AuthForms";

import FlashMessage from 'react-flash-message'

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from "react-spinners/BounceLoader";

import axios from "axios";

const _ = require('lodash');


// import  { EOS }  from '@ekoopensource/sdk';

// const credentials = {
//     clientId: 'hello-world', 
//     clientSecret: 'who-day-breathe' 
// };

// const EosSdk = new EOS(credentials)

// Initiate the environment (optional)

export default function IndividualRegistration() {




    useEffect(() => { 

        getCitizens();

      }, []);
    // EosSdk.setEnviroment("staging"); 

    // try{
    //     const doctors =  EosSdk.fetchData("health","doctors");
        
    //     console.log(doctors);
    //     // do something with the doctors result
    //     }
    // catch (e) {
    //     console.log(e);
    // // catch Exception Error
    // }

    
    
    
    
    const [citizens, setCitizens]= useState([]);
    const [residents, setResidents]= useState([]);
    const [lasgidiId, setLasgidiId] = useState('');
    const [pinCode, setPinCode] = useState("");
	const [isError, setIsError] = useState(false);
	const [lagError, setLagError] = useState(false);
    const [disabled, setDisasbled] = useState(false)
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("green");
    
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState('');

    const [message, setMessage] = useState('');
    const [messageLas, setMessageLas] = useState('');
    const [isSucess, setIsSucess] = useState(false);
    const [state, setState] = useState('');

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  
    const findValue = (arr, value) => {
        return _.find(arr, (elem) => {
            return elem.lasgidi_id ? elem.lasgidi_id === value : elem.name === value;
        });
    }

    const postIndividualRegistration = (e) => {
		e.preventDefault();

		var data = {
            lasgidiId
		}   
		
        const citizen = citizens && citizens.map(({uuid, lasgidi_id, firstname, lastname, address}) => {
            return (lasgidi_id)
        })

        console.log(citizen);
        let lasgidi_Id = data.lasgidiId;

    let citizen_data = lasgidi_Id

    let citizen_data_array = citizen;

    let check_citizen_data = _.includes(citizen_data_array, citizen_data);

    if(check_citizen_data == false)
    {
    //   return validationError(req, res, 422, { message: 'Domain Invite Mismatch, invitee | inviter expected' });
            setMessageLas("invalid Lasgidi Id")
            setLagError(true);
            setDisasbled(false); 
            return "error";

    }

    let aboutAboutment= findValue(citizens, lasgidiId);
    setState(aboutAboutment);


        return  onOpenModal()

	  }
	
      const validateInput = (handleError) => {
        if (handleError)
        {
         return setErrors(handleError)
        }

      }


      const postPinCode = (e) => {
		e.preventDefault();

        var data = {
               pinCode
		}
		
        const pin= "4539";
        const errorMessage = "Pin Code Incorrect";

        if(pin != data.pinCode)
        {
            setMessage(errorMessage)
            setIsError(true);
            setDisasbled(false); 
        }
        
        else{
            setIsSucess(true)
            setMessage('Submitted Successfully'); 
        }

	  }
    
    
      const checkboxHandler = () => {
        setConsent(!consent);
        
      }

// for previous implementation
    // const getCitizens = () => {
    //     axios.get('https://cors-anywhere.herokuapp.com/https://api.citizens.staging.ekoopenbuild.com/citizens', {
    //         headers: {
    //             'Authorisation': ``,
    //         }
    //       })
    //     .then(result => {
    //         setCitizens(result.data.OCXPayload.data.data)
                
    //     }).catch(err =>{
    //         // setMessage(err.response.data.message)
    //         // console.log(err.response.statusText); 
    //     })
    // }

    const getCitizens = () => {
        axios.get('../../../public/json/citizen.json', {
          })
        .then(result => {
            setCitizens(result.data)
                
        }).catch(err =>{
        })
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
                    <li className="breadcrumb-item active" aria-current="page">Login to LASG Hospital Appointment Booking System</li>
                    </ol>
                    </nav>
                </div>
            </section>


            <div className="container mg-top mg-btm" style={{ paddingLeft:"200px" }} >

  

      <div className="row" >
        <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-5 col-md-offset-4 col-lg-4 col-lg-offset-4">

          <h3>Enter Your Resident ID</h3>
          
          <div className="panel panel-default box-shadow">

            <div className="panel-body">

                { lagError && (<div>
                                    <FlashMessage duration={5000}>
                                    <Error> {messageLas}</Error>
                                    </FlashMessage>
                            </div>)

                }
            
            <form onSubmit={postIndividualRegistration}>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></div>
                    <input type="text"  name="lasgidiid"  value={lasgidiId || ''} onChange={e => {setLasgidiId(e.target.value);}} className={`input ${errors.lasgidiId && 'border border-danger'} with-border`}  placeholder="Enter your LasGidi ID to begin" required />
                                {errors.lasgidiId && (
                                    <p className="text-danger">{errors.lasgidiId}</p>
                                )}
                  </div>
                </div>

                <button className="btn btn-primary btn-block" type="submit"> Submit </button>
              </form>

                <div className="social-login-separator"><span>or</span></div>
                    <div className="social-login-buttons">
                        <button className="facebook-login ripple-effect"> <i className="fas fa-fingerprint"></i> Use BVN Number </button>
                        <button className="google-login ripple-effect"> Use NIN Number </button>
				</div>
                
            </div>
          </div>
        </div>
      </div>
            </div>

            <Modal open={open} onClose={onCloseModal} center>
                            <h4>Confirm your ID by entering the 6 digit code sent to your registered number</h4> <br />
                            <div className="content with-padding padding-bottom-10">

                            {isSucess ? (<div> <FlashMessage duration={5000}> <Success>{message}</Success> </FlashMessage> <Redirect to={{ pathname : "/about_appointment", state: {property_state: state} }}/> </div>) : ''}

                            { isError && (<div>
												<FlashMessage duration={5000}>
                                                <Error> {message}</Error>
												</FlashMessage>
										</div>)
						    }

                            <LoadingOverlay
                                active={disabled}
                                spinner={ <BounceLoader color={color} loading={loading}  size={100} /> }
                                text='Loading...'
                            >
                            </LoadingOverlay>

                        <form onSubmit={postPinCode}>
                        <div className="row">

                                <div className="col-xl-6">
                                        <div className="submit-field">
                                            <input type="text" name="name"  value={pinCode} onChange={e => {setPinCode(e.target.value);}} placeholder="Enter Code Here" className="with-border"  />
                                        </div>
                                </div>
                        </div>
                        <div className="col-xl-12">
                            <button type="submit" className="btn btn-success btn-lg ripple-effect big margin-top-30"  disabled={disabled} ><i className="icon-feather-plus"></i> Validate </button>
                        </div>
                        </form>

                    </div>
                        </Modal>

            <Footer />
        </div>
    )
}
