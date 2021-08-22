import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import "./../../styles/Login_SignUp.css";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import google from "./../../assets/images/google.png";
import icon from "./../../assets/images/icon.png";
import { useGoogleLogin } from "react-google-login";
import { url } from "./../../utils/api";
// import { OnSuccessWithSignUp } from "./../../utils/googleAuth";
import { useStateValue } from "./../../StateProvider";
import { defaultToast, errorToast, successToast } from "../../utils/toast";
import { NavLink } from "react-router-dom";

function LoginModal(props) {
	// eslint-disable-next-line
	const [{ user }, dispatch] = useStateValue();
	const [showPasswordError, setShowPasswordError] = useState(false);
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [formDetails, setFormDetails] = useState({
		fname: "",
		lname: "",
		email: "",
		age: "",
		password: "",
		creamzoId: "",
	});

	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

	const onFailure = (res) => {
		console.log("Login failed: res:", res);

		errorToast("Login failed.");
	};
	const onSuccess = (res) => {
		const name = res.profileObj.name.split(" ");
		axios
			.post(`${url}/user/signUpWithGoogle`, {
				fname: name[0],
				lname: name[1],
				email: res.profileObj.email,
				imgUrl: res.profileObj.imageUrl,
				googleId: res.profileObj.googleId,
				creamzoId: res.profileObj.email.split("@")[0],
			})
			.then((res) => {
				console.log("signUpWithGoogle", res.data);
				dispatch({ type: "SIGN_UP", payload: res.data });
				dispatch({ type: "CLOSE_ALL" });
				successToast("Login sucecssful.");
			})
			.catch((e) => {
				console.log(e.message);
				errorToast("Login failed.");
			});
	};
	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
		isSignedIn: false,
		accessType: "offline",
		// responseType: 'code',
		// prompt: "consent",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setShowPasswordError(true);
		} else {
			axios
				.post(`${url}/user/signUp`, {
					...formDetails,
					password,
					creamzoId: formDetails.email.split("@")[0],
					verified: "NO",
					googleId: formDetails.email,
				})
				.then((res) => {
					dispatch({ type: "CLOSE_ALL" });
					defaultToast(
						"Verification link has been send to your email id. Please verify to continue"
					);
				})
				.catch((e) => {
					console.log(e.message);
					errorToast("Sign up failed.");
				});
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormDetails((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
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
					<form onSubmit={handleSubmit}>
						<p
							className="for_mobile"
							style={{
								fontSize: "1.5rem",
								color: "gray",
								marginTop: "5px",
							}}
						>
							Already have an account?{" "}
							<span
								className="for_mobile"
								style={{ color: "#c21336", cursor: "pointer" }}
								onClick={() => props.toggle("login")}
							>
								Login
							</span>
						</p>
						<div className="row g-3 mt-1">
							<div className="col has-validation">
								<label
									for="exampleInputEmail1"
									className="form-label"
									style={{ fontSize: "1.5rem" }}
								>
									First name
								</label>
								<input
									style={{ fontSize: "1.5rem" }}
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={(e) => handleChange(e)}
									value={formDetails.fname}
									name="fname"
									required
								/>
							</div>
							<div className="col">
								<label
									for="exampleInputEmail2"
									className="form-label"
									style={{ fontSize: "1.5rem" }}
								>
									Last name
								</label>
								<input
									style={{ fontSize: "1.5rem" }}
									type="text"
									className="form-control"
									id="exampleInputEmail2"
									aria-describedby="emailHelp"
									onChange={(e) => handleChange(e)}
									value={formDetails.lname}
									name="lname"
									required
								/>
							</div>
						</div>
						<div className="row g-3 mt-2">
							<div className="col">
								<label
									for="exampleInputEmail3"
									className="form-label"
									style={{ fontSize: "1.5rem" }}
								>
									Email
								</label>
								<input
									style={{ fontSize: "1.5rem" }}
									type="email"
									className="form-control"
									id="exampleInputEmail3"
									aria-describedby="emailHelp"
									onChange={(e) => handleChange(e)}
									value={formDetails.email}
									name="email"
									required
								/>
							</div>
							<div className="col">
								<label
									for="exampleInputEmail4"
									className="form-label"
									style={{ fontSize: "1.5rem" }}
								>
									Age
								</label>
								<input
									style={{ fontSize: "1.5rem" }}
									type="number"
									min="18"
									max="150"
									className="form-control"
									id="exampleInputEmail4"
									aria-describedby="emailHelp"
									onChange={(e) => handleChange(e)}
									value={formDetails.age}
									name="age"
									required
								/>
							</div>
						</div>
						<div className="row g-3 mt-2">
							<div className="col">
								<label
									for="exampleInputEmail5"
									className="form-label"
									style={{ fontSize: "1.5rem" }}
								>
									Password
								</label>
								<input
									style={{ fontSize: "1.5rem" }}
									type="password"
									className="form-control"
									id="exampleInputEmail5"
									aria-describedby="emailHelp"
									minLength="8"
									onChange={(e) => {
										setPassword(e.target.value);
										setShowPasswordError(false);
									}}
									value={password}
									name="password"
									required
								/>
							</div>
							<div className="col">
								<label
									for="exampleInputEmail6"
									className="form-label"
									style={{ fontSize: "1.5rem" }}
								>
									Confirm password
								</label>
								<input
									style={{ fontSize: "1.5rem" }}
									type="password"
									min="18"
									max="150"
									className="form-control"
									id="exampleInputEmail6"
									aria-describedby="emailHelp"
									onChange={(e) => {
										setConfirmPassword(e.target.value);
										setShowPasswordError(false);
									}}
									value={confirmPassword}
									name="confirmPassword"
									required
								/>
							</div>
						</div>

						<div style={{ cursor: "pointer" }}>
							<p
								className="for_mobile"
								style={{
									width: "19rem",
									marginLeft: "auto",
									fontSize: "1.4rem",
									marginTop: "7px",
									color: "#c21336",
								}}
							>
								{showPasswordError ? (
									`Passwords don't match`
								) : (
									<div style={{ height: "2.1rem" }}></div>
								)}
							</p>
						</div>
						<div className="mb-3 login_below_section">
							<button
								className="btn btn-primary nav_btn for_mobile"
								type="submit"
							>
								Sign Up
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
								onClick={signIn}
								style={{
									backgroundColor: "white",
									borderRadius: "0",
									fontSize: "1.4rem",
									textTransform: "capitalize",
									marginBottom: "1rem",
								}}
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
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default LoginModal;
