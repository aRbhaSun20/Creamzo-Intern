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
import logo from "./assets/logo.jpg";
import { useSnackbar } from "notistack";

const NavBar = () => {
	// eslint-disable-next-line
	const [login, setLogin] = useContext(LoginContext);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = useState(false);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(!open);
	};

	const { enqueueSnackbar } = useSnackbar();

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
			<div className="navbar" style={{ paddingTop: "5px" }}>
				<div className="top">
					<NavLink activeClassName="activeLink" to="/" exact>
						<Typography
							variant="h4"
							style={{ fontWeight: "bold", fontSize: "1rem" }}
						>
							<img src={logo} className="logo" alt="logo" />
						</Typography>
					</NavLink>
					<div className="input-group">
						<div style={{ width: "-webkit-fill-available" }}>
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

				<div className="afterloginnav">
					<NavLink activeClassName="activeLink" to="/" className="navs" exact>
						<Typography>Home</Typography>
					</NavLink>
					<div className="links">
						{/*<NavLink activeClassName="activeLink" to="/" className="navs" exact>
							<Typography>
								Home
							</Typography>
						</NavLink>*/}
						<NavLink
							activeClassName="activeLink"
							to="/about"
							className="navs"
							exact
						>
							<Typography>About</Typography>
						</NavLink>
						<NavLink
							className="navs"
							activeClassName="activeLink"
							to="/blog"
							exact
						>
							<Typography>Blog</Typography>
						</NavLink>
					</div>
					<div className="avatar">
						<Avatar style={{ fontSize: "1vw" }} onClick={handleClick} />
						<Popper
							id="simple-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							style={{ backgroundColor: "#f8f9fe", zIndex: "1000" }}
						>
							<MenuItem onClick={handleClose}>
								<Link
									to="/profile"
									style={{ textDecoration: "none", color: "#616d8b" }}
								>
									Profile
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link
									to="/settings"
									style={{ textDecoration: "none", color: "#616d8b" }}
								>
									My account
								</Link>
							</MenuItem>
							<MenuItem
								onClick={() => {
									handleClose();
									enqueueSnackbar("Log Out", { variant: "success" });
									sessionStorage.getItem("creamzToken", "");
									setLogin({ type: LOGIN_ACTIONS.LOGOUT });
								}}
							>
								Logout
							</MenuItem>
						</Popper>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
