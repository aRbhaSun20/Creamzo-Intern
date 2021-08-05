import Navbar from "../../Components/About/navbar";
import Find from "../../Components/About/find";
import Footer from "../../Components/About/footericon";
import Services from "../../Components/About/services";
import Team from "../../Components/About/team";
import Serv from "../../Components/About/service1";
import Img from "../../Components/About/image";
import Recent from "../../Components/About/recent";
import React from "react";


function About() {
	return (
		<div>
			{/* <a className="menu-toggle rounded" href="#"> */}
				<i className="fas fa-bars"></i>
			{/* </a> */}
			<Navbar />
			<Find />
			<Services />
			<Serv />
			<Img />
			<Recent />
			<Team />
			<Footer />
		</div>
	);
}

export default About;
