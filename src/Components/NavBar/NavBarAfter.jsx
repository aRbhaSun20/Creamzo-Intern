import {
	Avatar,
	InputAdornment,
	Typography,
	InputBase,
	MenuItem,
	Popper,
} from "@material-ui/core";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css";
import { LoginContext, LOGIN_ACTIONS } from "../../Context/Login";
import {  Search } from "@material-ui/icons";
import { useState } from "react";

const NavBar = () => {
	// eslint-disable-next-line
	const [login, setLogin] = useContext(LoginContext);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = useState(false);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(!open);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};
	// const [notifyOpen, setnotifyOpen] = React.useState(false);

	// const handlenotifyClose = () => {
	// 	setnotifyOpen(false);
	// };

	return (
		<React.Fragment>
			<div className="navbar">
				<div className="top">
					<NavLink activeClassName="activeLink" to="/" exact>
						<Typography
							variant="h4"
							style={{ fontWeight: "bold", fontSize: "1rem" }}
						>
							Logo
						</Typography>
					</NavLink>
					<div className="input-group">
						<div style={{width: "-webkit-fill-available"}}>
							<InputBase
								type="search"
								placeholder="Search"
								aria-describedby="button-addon2"
								style={{
									backgroundColor: "#eaeaf1",
									borderRadius: "2rem",
									paddingLeft: "1rem",
									width: "100%",
									outline: "none",
									height: "3rem",
									display: "flex",
									alignItems: "center",
								}}
								startAdornment={
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								}
								class="form-control border-0 bg-light navbar_input"
							/>
						</div>
					</div>
				</div>

				<div className="remaining-navs">
					
					<div className="links">
						<NavLink activeClassName="activeLink" to="/" className="navs" exact>
							<Typography>
								Home
							</Typography>
						</NavLink>
						<NavLink
							activeClassName="activeLink"
							to="/about"
							className="navs"
							exact
						>
							<Typography>
								About
							</Typography>
						</NavLink>
						<NavLink
							className="navs"
							activeClassName="activeLink"
							to="/blog"
							exact
						>
							<Typography>
								Blog
							</Typography>
						</NavLink>

						<div className="avatar">
							<Avatar style={{ fontSize: "1vw" }} onClick={handleClick} />
							<Popper
								id="simple-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
								<MenuItem
									onClick={() => {
										handleClose();
										setLogin({ type: LOGIN_ACTIONS.LOGOUT });
									}}
								>
									Logout
								</MenuItem>
							</Popper>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
