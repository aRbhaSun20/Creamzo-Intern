import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import "./style/Navbar.css";
// import logo from "./../../assets/images/logo.png";
// import LoginModal from "./LoginModal";
// import SignUpModal from "./SignUpModal";
// import { useStateValue } from "./../../StateProvider";
// import default_avatar from "./../../assets/images/default_avatar.png";
// import { successToast } from "../../utils/toast";

function Navbar(props) {
	// const [{ showLoginModal, showSignUpModal, user }, dispatch] = useStateValue();
	const [accountOptions, setAccountOptions] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const history = useHistory();

	// const handleToggle = (val) => {
	// 	if (val === "login") {
	// 		dispatch({ type: "SHOW_LOGIN" });
	// 	} else {
	// 		dispatch({ type: "SHOW_SIGNUP" });
	// 	}
	// };

	return (
		<>
			{/* {showSignUpModal ? (
				<SignUpModal
					onclick={(x) => dispatch({ type: "CLOSE_ALL" })}
					show={showSignUpModal}
					toggle={handleToggle}
				/>
			) : null}
			{showLoginModal ? (
				<LoginModal
					onclick={(x) => dispatch({ type: "CLOSE_ALL" })}
					show={showLoginModal}
					toggle={handleToggle}
				/>
			) : null} */}
			<div className="container-fluid nav_outer">
				<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
					<div className="container-fluid mx-5 navbar_container">
						<NavLink exact to="/" className="navbar-brand">
							{/* <img src={logo} className="logo" alt="logo" /> */}
							logo
						</NavLink>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
							<div className="p-1 mt-2 bg-lightrounded rounded-pill shadow-sm input_container">
								<div className="input-group">
									<div className="input-group-prepend">
										<SearchIcon id="nav_icon" />
									</div>
									<input
										type="search"
										placeholder="Search"
										aria-describedby="button-addon2"
										class="form-control border-0 bg-light navbar_input"
										onChange={(e) => {
											setInputValue(e.target.value);
											props.submit(e.target.value);
										}}
										value={inputValue}
									/>
								</div>
							</div>

							<div className="navbar-nav ml-auto">
								<NavLink
									style={{ width: "10rem" }}
									exact
									to="/aboutUs"
									className="nav-link"
									aria-current="page"
								>
									About Us
								</NavLink>
								<NavLink exact to="/blog" className="nav-link">
									Blog
								</NavLink>
								{!true ? (
									<>
										<button
											className="btn btn-primary nav_btn mx-3"
											// onClick={() => dispatch({ type: "SHOW_SIGNUP" })}
										>
											Sign Up
										</button>
										<button
											className="btn btn-primary nav_btn"
											// onClick={() => dispatch({ type: "SHOW_LOGIN" })}
											style={{ backgroundColor: "#eaeaf1", color: "black" }}
										>
											Login
										</button>
									</>
								) : (
									<>
										<NavLink
											exact
											to="/today"
											className="nav-link"
											aria-current="page"
										>
											Today
										</NavLink>
										{false ? (
											<Avatar
												// src={user[0]?.imgUrl}
												className="avatar"
												alt={"avatar"}
												onClick={() => setAccountOptions(!accountOptions)}
											/>
										) : (
											<Avatar
												// src={default_avatar}
												className="avatar"
												alt={"avatar"}
												onClick={() => setAccountOptions(!accountOptions)}
											/>
										)}
									</>
								)}
								{true ? (
									<div
										className="dropdown-menu"
										id="dropdown"
										style={{
											display: "block",
											positon: "absolute",
											top: 58,
											right: -30,
											width: "20rem",
											padding: "8px",
											borderRadius: "12px",
										}}
										aria-labelledby="dropdownMenuButton"
									>
										<NavLink
											to={`/profile/`}
											exact
											style={{ textDecoration: "none" }}
										>
											<option
												className="dropdown-item"
												value={`add`}
												onClick={(e) => {
													setAccountOptions(!accountOptions);
												}}
												style={{
													fontSize: "1.6rem",
													padding: "8px",
													cursor: "pointer",
												}}
											>
												My Profile
											</option>
										</NavLink>
										<NavLink
											to="/account"
											exact
											style={{ textDecoration: "none" }}
										>
											<option
												value={`delete`}
												onClick={(e) => {
													setAccountOptions(!accountOptions);
												}}
												className="dropdown-item"
												style={{
													fontSize: "1.6rem",
													padding: "8px",
													cursor: "pointer",
												}}
											>
												Account settings
											</option>
										</NavLink>
										<NavLink
											to="/myUploads"
											exact
											style={{ textDecoration: "none" }}
										>
											<option
												value={`delete`}
												onClick={(e) => {
													setAccountOptions(!accountOptions);
												}}
												className="dropdown-item"
												style={{
													fontSize: "1.6rem",
													padding: "8px",
													cursor: "pointer",
												}}
											>
												My uploads
											</option>
										</NavLink>
										<option
											value={`delete`}
											onClick={(e) => {
												// dispatch({ type: "LOG_OUT" });
												// successToast("Logged out successfully.");
												setAccountOptions(false);
												history.push("/");
											}}
											className="dropdown-item"
											style={{
												fontSize: "1.6rem",
												padding: "8px",
												cursor: "pointer",
											}}
										>
											Logout
										</option>
									</div>
								) : null}
							</div>
						</div>
					</div>
				</nav>
			</div>
		
		</>
	);
}

export default Navbar;
