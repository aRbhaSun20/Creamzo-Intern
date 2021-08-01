import { Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css";

const NavBar = () => {

	return (
		<React.Fragment>
			<div className="navbar">
				<NavLink activeClassName="activeLink" to="/" exact>
					<Typography
						variant="h4"
						className="title"
						style={{ fontWeight: "bold" }}
						href="/"
					>
						Logo
					</Typography>
				</NavLink>

				<div className="remaining-navs">
					<NavLink
						activeClassName="activeLink"
						to="/about"
						className="navs"
						exact
					>
						<Typography style={{ fontWeight: "bold" }}>About</Typography>
					</NavLink>
					<NavLink
						className="navs"
						activeClassName="activeLink"
						to="/blog"
						exact
					>
						<Typography style={{ fontWeight: "bold" }}>Blog</Typography>
					</NavLink>

					<NavLink
						className="navs"
						activeClassName="activeLink"
						to="/discover"
						exact
					>
						<Typography style={{ fontWeight: "bold" }}>Discover</Typography>
					</NavLink>

					<NavLink
						className="navs"
						activeClassName="activeLink"
						to="/login"
						exact
					>
						<Typography style={{ fontWeight: "bold" }}>Log In</Typography>
					</NavLink>

					<NavLink
						className="navs"
						activeClassName="activeLink"
						to="/signUp"
						exact
					>
						<Typography style={{ fontWeight: "bold" }}>Sign Up</Typography>
					</NavLink>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
