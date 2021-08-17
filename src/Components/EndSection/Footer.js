import React from "react";
import { NavLink } from "react-router-dom";
import "./Style/Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
	return (
		<div className="footer_container">
			<div className="footer_inner">
				<NavLink
					className="footer_links"
					style={{ fontSize: "1.2rem" }}
					exact
					to="/about"
				>
					About Us
				</NavLink>
				<NavLink
					className="footer_links"
					style={{ fontSize: "1.2rem" }}
					to="/discover"
					exact
				>
					Discover
				</NavLink>
				<NavLink
					className="footer_links"
					style={{ fontSize: "1.2rem" }}
					to="/blog"
					exact
				>
					Blog
				</NavLink>
				<NavLink
					className="footer_links"
					style={{ fontSize: "1.2rem" }}
					to="/contact"
					exact
				>
					Contact
				</NavLink>
				<NavLink
					className="footer_links"
					style={{ fontSize: "1.2rem" }}
					to="/terms"
					exact
				>
					Terms
				</NavLink>
			</div>
			<div className="footer_social_links">
				<a href="https://www.facebook.com/Creamzo7">
					<FacebookIcon className="footer_icons" style={{ fontSize: "2rem" }} />
				</a>
				<a href="https://www.instagram.com/creamzo7/">
					<InstagramIcon
						className="footer_icons"
						style={{ fontSize: "2rem" }}
					/>
				</a>
				<a href="https://www.linkedin.com/company/creamzo/">
					<LinkedInIcon className="footer_icons" style={{ fontSize: "2rem" }} />
				</a>
				<a href="https://twitter.com/creamzo3">
					<TwitterIcon className="footer_icons" style={{ fontSize: "2rem" }} />
				</a>
			</div>
		</div>
	);
}

export default Footer;
