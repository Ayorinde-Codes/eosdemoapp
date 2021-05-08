import React, {useEffect, useState} from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
import Banner from './banner'
import Footer from './footer'
import VaccineProof from './vaccineproof'
import Symptoms from './symptoms'



export default function Index() {

      
      return (
        <div>
            <Header />

            <Banner />

            <VaccineProof />

            {/* <Symptoms /> */}

            <Footer />

        </div>
    )
}
