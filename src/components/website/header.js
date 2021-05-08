import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import Banner from './banner';


function Header(props){

    return (
        <div>

	<header className="header_area">
		<div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-dark">
			{/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> */}
				<div className="container">

					<Link className="navbar-brand logo_h" to={'/'}> <img style={{height:"100px", width:"150px"  }} src="/assets/images/site_logo1.png" alt="" /> </Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					</button>

						<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul className="nav navbar-nav menu_nav ml-auto">
								<li className="nav-item"><Link className="nav-link" to={"/"}>Home</Link></li>
								{/* <li className="nav-item"><Link className="nav-link" to={'/individual_registration'}>Individual Registration</Link></li> */}
								{/* <li className="nav-item"><Link className="nav-link" to={'/individual_request'}>Individual Request </Link></li> */}
								{/* <li className="nav-item"><Link className="nav-link" to={'/provider_registration'}>Provider Registration </Link></li> */}
								</ul>
								</div> 
								
				</div>
			</nav>
		</div>
	</header>

<div className="padding-bottom: 25px"></div>

      </div>
    )
}

export default Header;

