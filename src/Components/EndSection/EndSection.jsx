import React from "react";
import { Link } from "react-router-dom";
import "./Style/style.css";
const EndSection = () => {
	return (
		<React.Fragment>

			<footer className="footer-distributed">
				<div className="footer-left">
					<h3>Creamzo</h3>
					<p className="footer-links">
						<Link className="footerLink" exact to="/">Home</Link>
						<Link className="footerLink" exact to="/about">About</Link>
						<Link className="footerLink" exact to="/blog">Blog</Link>
						<Link className="footerLink" exact to="/discover">Discover</Link>
						<Link className="footerLink" exact to="/contact">Contact</Link>
					</p>
				</div>
				<div className="footer-center">
					<div>
						<i className="fa fa-map-marker" />
						<p><span>address to be provided</span> Bangalore, India</p>
					</div>
					<div>
						<i className="fa fa-phone" />
						<p>+911234567890</p>
					</div>
					<div>
						<i className="fa fa-envelope" />
						<p><a href="mailto:support@company.com">creamzo@gamil.com</a></p>
					</div>
				</div>
				<div className="footer-right">
					<p className="footer-company-about">
						<span>About the company</span>
						Creamzo’s motto is to motivate people who are passionate, creative, and fun-loving. It’s the largest collection of Ideas, quotes, and photographs, DIY, and crafts.
					</p>
					<div className="footer-icons">
						<a href="#"><i className="fa fa-facebook" /></a>
						<a href="#"><i className="fa fa-twitter" /></a>
						<a href="#"><i className="fa fa-linkedin" /></a>
						<a href="#"><i className="fa fa-github" /></a>
					</div>
				</div>
			</footer>



		</React.Fragment>
	);
};

export default EndSection;
