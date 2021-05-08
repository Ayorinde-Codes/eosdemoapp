import React from 'react'
import { Link } from 'react-router-dom'

export default function VaccineProof() {
    return (
        <div>
            
            <section>
            <div className="container mg-top mg-btm" >
               
                     <p align="center">Scenario: A Lagos resident wishes to book an appointment to visit the nearest hospital 
                        </p>
                        <div align="center"> 
                        <Link to={'/individual_registration'}> 
                              <button className="btn btn-sm btn-info" > Begin Booking </button> 
                        </Link>
                      
    
                        </div>
                 </div>
                  
         </section>
        </div>
    )
}
