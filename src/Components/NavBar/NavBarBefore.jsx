import { Button, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css";
import Modal from "@material-ui/core/Modal";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { LoginContext } from "../../Context/Login";

const NavBar = () => {
  const [LoginOpen, setLoginOpen] = React.useState(false);
  const [SignUpOpen, setSignUpOpen] = React.useState(false);
  // eslint-disable-next-line
  const [login, setLogin] = useContext(LoginContext);

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignClose = () => {
    setSignUpOpen(false);
  };

  return (
		<React.Fragment>
			<div className="navbar">
				<NavLink activeClassName="activeLink" to="/" exact>
					<Typography
						variant="h4"
						style={{ fontWeight: "bold", fontSize: "2vw" }}
					>
						Logo
					</Typography>
				</NavLink>
				<div className="remaining-navs" style={{ width: "50%" }}>
					<NavLink
						activeClassName="activeLink"
						to="/about"
						className="navs"
						exact
					>
						<Typography style={{ fontWeight: "bold", fontSize: ".8vw" }}>
							About
						</Typography>
					</NavLink>
					<NavLink
						className="navs"
						activeClassName="activeLink"
						to="/blog"
						exact
					>
						<Typography style={{ fontWeight: "bold", fontSize: ".8vw" }}>
							Blog
						</Typography>
					</NavLink>

					<NavLink
						className="navs"
						activeClassName="activeLink"
						to="/discover"
						exact
					>
						<Typography style={{ fontWeight: "bold", fontSize: ".8vw" }}>
							Discover
						</Typography>
					</NavLink>
					<Button
						style={{
							fontWeight: "bold",
							width: "7vw",
							height: "5vh",
							borderRadius: "1.5rem",
							marginLeft: "1rem",
							outline: "none",
							fontSize: ".8vw",
						}}
						variant="contained"
						onClick={() => {
							setSignUpOpen(true);
						}}
					>
						Sign Up
					</Button>
					<Button
						style={{
							fontWeight: "bold",
							width: "7vw",
							height: "5vh",
							borderRadius: "1.5rem",
							outline: "none",
							fontSize: ".8vw",
						}}
						variant="contained"
						color="secondary"
						onClick={() => {
							setLoginOpen(true);
						}}
					>
						Log In
					</Button>

					<Modal
						open={LoginOpen}
						onClose={handleLoginClose}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						style={{ display: "flex", margin: "auto" }}
					>
						<Login setopen={setLoginOpen} setSignopen={setSignUpOpen} />
					</Modal>
					<Modal
						open={SignUpOpen}
						onClose={handleSignClose}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						style={{ display: "flex", margin: "auto" }}
					>
						<SignUp setopen={setSignUpOpen} setLoginOpen={setLoginOpen} />
					</Modal>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
