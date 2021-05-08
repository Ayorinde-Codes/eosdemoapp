import React, {useState, useEffect}  from "react";

import Index from "./components/website";
import Header from "./components/website/header"

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Notfound from "./components/website/notfound";
import IndividualRegistration from "./components/website/individual_registration";
import AboutYourAppointment from "./components/website/about_your_appointment";
import ChooseHospital from "./components/website/choose_hospital";
import ChooseTime from "./components/website/choose_preferred_time";
import BookAppointment from "./components/website/book_appointment";

export default function App(props) {

  return (
    <div>
    <div>

          <Router>
            <Switch>
              <Route exact path="/" component={Index } /> 
              <Route path="/individual_registration" component={IndividualRegistration} />  
              <Route path="/about_appointment" component={AboutYourAppointment} />  
              <Route path="/choose_hospital" component={ChooseHospital} />  
              <Route path="/choose_time_personnel" component={ChooseTime} />  
              <Route path="/book_appointment" component={BookAppointment} />  
              <Route path="*" component={Notfound} />
            </Switch>
          </Router>

        </div>
    </div>
  );
}
