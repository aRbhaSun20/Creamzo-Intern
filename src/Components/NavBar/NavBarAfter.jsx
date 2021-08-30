import {
	Avatar,
	InputAdornment,
	Typography,
	InputBase,
	MenuItem,
	Popper,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style/style.css";
import { LoginContext, LOGIN_ACTIONS } from "../../Context/Login";
import { Search } from "@material-ui/icons";
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
				<div
					className="top"
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						alignItems: "center",
						width: "20%",
					}}
				>
					<NavLink activeClassName="activeLink" to="/" exact>
						<Typography
							variant="h4"
							style={{ fontWeight: "bold", fontSize: "2vw" }}
						>
							Logo
						</Typography>
					</NavLink>
					<NavLink activeClassName="activeLink" to="/" exact>
						<Typography variant="h5" style={{ fontSize: ".8vw" }}>
							Home
						</Typography>
					</NavLink>
				</div>

				<div className="remaining-navs" style={{ width: "80%" }}>
					<div
						className="input-group"
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							alignItems: "center",
							width: "75rem",
						}}
					>
						<div>
							<InputBase
								type="search"
								placeholder="Search"
								aria-describedby="button-addon2"
								style={{
									backgroundColor: "#eaeaf1",
									borderRadius: "2rem",
									paddingLeft: "2rem",
									width: "60vw",
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
					<div
						className="links"
						style={{
							width: "20rem",
							display: "flex",
							justifyContent: "space-evenly",
							alignItems: "center",
						}}
					>
						<NavLink
							activeClassName="activeLink"
							to="/about"
							className="navs"
							exact
						>
							<Typography style={{ fontWeight: "bold", fontSize: ".8vw" }}>
								About Us
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

						<div className="avatar">
							<Avatar style={{ fontSize: "1vw" }} onClick={handleClick} />
							<Popper
								id="simple-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>
									<Link
										to="/profile"
										style={{ textDecoration: "none", color: "black" }}
									>
										Profile
									</Link>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link
										to="/settings"
										style={{ textDecoration: "none", color: "black" }}
									>
										My account
									</Link>
								</MenuItem>
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
