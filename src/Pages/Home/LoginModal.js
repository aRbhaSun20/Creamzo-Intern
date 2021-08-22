import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "./../../styles/Login_SignUp.css";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import google from "./../../assets/images/google.png";
import icon from "./../../assets/images/icon.png";
import { useGoogleLogin } from "react-google-login";
// import { refreshTokenSetup } from "./../../utils/refreshToken";
import { url } from "./../../utils/api";
import { useStateValue } from "./../../StateProvider";
import { defaultToast, errorToast, successToast } from "../../utils/toast";
import { NavLink } from "react-router-dom";

function LoginModal(props) {
	// eslint-disable-next-line
	const [{ user }, dispatch] = useStateValue();
	const [showResetView, setShowResetView] = useState(true);
	const [formDetails, setFormDetails] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormDetails((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${url}/user/login`, formDetails)
			.then((res) => {
				dispatch({ type: "LOGIN", payload: res.data });
				dispatch({ type: "CLOSE_ALL" });
				successToast("Login successful.");
			})
			.catch((e) => {
				console.log(e);
				errorToast("Login failed.");
			});
	};

	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

	const onSuccess = (res) => {
		const name = res.profileObj.name.split(" ");
		axios
			.post(`${url}/user/loginWithGoogle`, {
				fname: name[0],
				lname: name[1],
				email: res.profileObj.email,
				imgUrl: res.profileObj.imageUrl,
				googleId: res.profileObj.googleId,
				creamzoId: res.profileObj.email.split("@")[0],
			})
			.then((res) => {
				dispatch({ type: "LOGIN", payload: res.data });
				dispatch({ type: "CLOSE_ALL" });
				successToast("Login successful.");
			})
			.catch((e) => {
				errorToast("Login failed.");
			});
	};

	const onFailure = (res) => {
		console.log("Login failed: res:", res);
		errorToast("Login failed.");
	};
	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
		isSignedIn: false,
		accessType: "offline",
	});

	const handleResetPassword = (e) => {
		e.preventDefault();
		axios
			.get(`${url}/user/resetPassword/${formDetails.email}`)
			.then((res) => {
				defaultToast(
					"A verification link has been send to your email. Please click on the link to reset your password"
				);
				dispatch({ type: "CLOSE_ALL" });
			})
			.catch((e) => {
				console.log(e.message);
				errorToast("Email is not registered with us.");
			});
	};

	return (
		<div>
			<Modal show={props.show} className="mobile_modal">
				<Modal.Header className="login_header_container login_signup">
					<div className="login_header_inner">
						<h1 className="text-center login_header">Welcome to Creamzo</h1>
						<CloseIcon
							className="login_icon"
							onClick={() => props.onclick(false)}
						/>
					</div>
					<div style={{ marginTop: "-10px" }}>
						<img
							src={icon}
							style={{ width: "4.3rem", height: "4.3rem" }}
							alt="icon"
						/>
					</div>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={showResetView ? handleSubmit : handleResetPassword}>
						<div className="mb-3">
							<label
								for="exampleInputEmail1"
								className="form-label"
								style={{ fontSize: "1.5rem" }}
							>
								Email
							</label>
							<input
								style={{ fontSize: "1.5rem" }}
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								required
								onChange={handleChange}
								value={formDetails.email}
								name="email"
							/>
						</div>
						{showResetView ? (
							<div className="mb-3">
								<label
									for="exampleInputPassword1"
									className="form-label"
									style={{ fontSize: "1.5rem" }}
								>
									Password
								</label>
								<input
									style={{ fontSize: "1.5rem" }}
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									required
									onChange={handleChange}
									value={formDetails.password}
									name="password"
								/>
							</div>
						) : null}

						<div
							style={{ cursor: "pointer" }}
							onClick={() => setShowResetView(!showResetView)}
						>
							<p
								className="for_mobile"
								style={{
									width: "13rem",
									marginLeft: "auto",
									fontSize: "1.4rem",
								}}
							>
								{showResetView ? "Reset password" : "Know password"}
							</p>
						</div>

						<div className="login_below_section">
							<button
								className="btn btn-primary nav_btn for_mobile"
								type="submit"
							>
								{showResetView ? "Login" : "Continue"}
							</button>
							<p
								className="for_mobile"
								style={{ fontSize: "1.5rem", marginTop: "15px" }}
							>
								OR
							</p>
							<Button
								className="for_mobile"
								variant="contained"
								style={{
									backgroundColor: "white",
									borderRadius: "0",
									fontSize: "1.4rem",
									textTransform: "capitalize",
									marginBottom: "1rem",
								}}
								onClick={signIn}
							>
								<img
									src={google}
									style={{
										height: "1.8rem",
										width: "1.8rem",
										objectFit: "contain",
										marginRight: "1rem",
									}}
									alt="google"
								/>
								Continue with Google
							</Button>
							<p style={{ fontSize: "1.3rem" }}>
								By continuing, you agree to Creamzo's{" "}
								<NavLink
									style={{ color: "black" }}
									onClick={() => dispatch({ type: "CLOSE_ALL" })}
									to={{ pathname: "/terms", data: "tos" }}
								>
									Terms of Service
								</NavLink>
								,{" "}
								<NavLink
									style={{ color: "black" }}
									onClick={() => dispatch({ type: "CLOSE_ALL" })}
									to={{ pathname: "/terms", data: "pp" }}
								>
									Privacy policy.
								</NavLink>
							</p>
							<p
								className="for_mobile"
								style={{
									fontSize: "1.5rem",
									color: "gray",
									marginTop: "2rem",
								}}
							>
								Dont have an account?{" "}
								<span
									className="for_mobile"
									style={{ color: "#c21336", cursor: "pointer" }}
									onClick={() => props.toggle("signUp")}
								>
									Signup
								</span>
							</p>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default LoginModal;
