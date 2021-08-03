import { Button, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css";
import Modal from "@material-ui/core/Modal";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const NavBar = () => {
	const [LoginOpen, setLoginOpen] = React.useState(false);
	const [SignUpOpen, setSignUpOpen] = React.useState(false);

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

					<Button
						style={{ fontWeight: "bold", width: "8em", height: "3em" }}
						variant="contained"
						color="primary"
						onClick={() => {
							setLoginOpen(true);
						}}
					>
						Sign In
					</Button>

					<Button
						style={{ fontWeight: "bold", width: "8em", height: "3em" }}
						variant="contained"
						color="primary"
						onClick={() => {
							setSignUpOpen(true);
						}}
					>
						Sign Up
					</Button>

					<Modal
						open={LoginOpen}
						onClose={() => {
							setLoginOpen(false);
						}}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						style={{ display: "flex", margin: "auto" }}
					>
						<Login setopen={setLoginOpen} />
					</Modal>
					<Modal
						open={SignUpOpen}
						onClose={() => {
							setSignUpOpen(false);
						}}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						style={{ display: "flex", margin: "auto" }}
					>
						<SignUp setopen={setSignUpOpen} />
					</Modal>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
