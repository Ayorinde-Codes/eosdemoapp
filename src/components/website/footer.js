import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            
			<footer className="footer-area">
				<div className="container">
				<div>
				<p className="footer-text  col-lg-8 col-md-12">
				{/* © {(new Date().getFullYear())}  <a href="mailto:ayorinde223@gmail.com"> <strong> Ayorinde223@gmail.com</strong> </a>. All Rights Reserved. */}
				© {(new Date().getFullYear())}  Eos Demo App. All Rights Reserved.
				</p>
				</div>
				
				</div>
			</footer>

        </div>
    )
}

export default Footer;
