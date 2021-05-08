import React from 'react'
import { Link } from 'react-router-dom'


export default function Notfound() {
    return (
            <div>
            {/* <Header /> */}
            <div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				<h2>Not Found</h2>

				{/* <!-- Breadcrumbs --> */}
				{/* <nav id="breadcrumbs" className="dark">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li>Log In</li>
					</ul>
				</nav> */}

			</div>
		</div>
	</div>
</div>



<div className="container">
	<div className="row">
		<div className="col-xl-5 offset-xl-3">


		<div className="container">

<div className="row">
	<div className="col-xl-12">

		<section id="not-found" className="center margin-top-50 margin-bottom-25">
			<h2>404 <i className="icon-line-awesome-question-circle"></i></h2>
			<p>We're sorry, but the page you were looking for doesn't exist</p>
		</section>

	</div>
</div>

</div>

		</div>
	</div>
</div>
<div className="margin-top-70"></div>

        </div>
    )
}
