import React, { useState, useContext } from "react";

import { Button, TextField } from "@material-ui/core";

import "./style/style.css";
// import fb from "./assets/fb.png";
import google from "./assets/google.png";

// eslint-disable-next-line
import { LoginContext, LOGIN_ACTIONS } from "../../Context/Login";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
// eslint-disable-next-line
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";
import { useSnackbar } from "notistack";
const SignUp = ({ setopen, setLoginOpen }) => {
	const [signUpData, setSignUpData] = useState({
		firstName: "",
		lastName: "",
		mail: "",
		age: 0,
		password: "",
		confPass: "",
	});
	// eslint-disable-next-line
	const [login, setLogin] = useContext(LoginContext);
	// eslint-disable-next-line
	const [password, setPassword] = useState("");
	// eslint-disable-next-line
	const [age, setAge] = useState("");
	const { enqueueSnackbar } = useSnackbar();

	const handleGoogleSignUp = (response) => {
		axiosSendRequest(AXIOS_ACTIONS.GOOGLE_SIGNUP, "googlelogin", {
			tokenId: response.tokenId,
		}).then((data) => console.log(data));
	};

	const handleChange = (e) => {
		setSignUpData((state) => ({ ...state, [e.target.name]: e.target.value }));
	};

	const handleSIgnUp = () => {
		axiosSendRequest(AXIOS_ACTIONS.SIGNUP, "signup", {
			email: signUpData.mail,
			password: signUpData.password,
			fname: signUpData.firstName,
			lname: signUpData.lastName,
			age: signUpData.age,
		})
			.then((res) => {
				setLogin({ type: LOGIN_ACTIONS.LOGIN });
				setLoginOpen(false);
				sessionStorage.setItem(
					"creamzToken",
					JSON.stringify({ token: res.token })
				);
				enqueueSnackbar("SignUp Successful", { variant: "success" });
			})
			.catch((e) => {
				enqueueSnackbar("SignUp Failed", { variant: "error" });
			});
	};

	return (
		<React.Fragment>
			<div className="signup-card">
				<div className="top-header">
					<div
						className="title"
						style={{
							position: "relative",
							top: "-0.5rem",
							color: "black",
							fontSize: "1.5rem",
							fontWeight: "bold",
						}}
					>
						Hey, Welcome to Creamzo!
					</div>
					<div className="dont-have">
						Already have an account?
						<span
							onClick={() => {
								setopen(false);
								setLoginOpen(true);
							}}
						>
							Login
						</span>
					</div>
				</div>
				<div className="bottom-header">
					<div className="inputs">
						<div className="inp">
							<TextField
								value={signUpData.firstName}
								onChange={handleChange}
								type="text"
								style={{
									width: "90%",
									fontSize: ".5vw",
									height: "3vh",
									outline: "none",
								}}
								name="firstName"
								variant="outlined"
								label="First Name"
							/>
						</div>
						<div className="inp">
							<TextField
								value={signUpData.lastName}
								onChange={handleChange}
								type="text"
								style={{
									width: "90%",
									fontSize: ".5vw",
									height: "3vh",
									outline: "none",
								}}
								name="lastName"
								variant="outlined"
								label="Last Name"
							/>
						</div>
						<div className="inp">
							<TextField
								value={signUpData.mail}
								onChange={handleChange}
								type="text"
								style={{
									width: "90%",
									fontSize: ".5vw",
									height: "3vh",
									outline: "none",
								}}
								variant="outlined"
								label="Email"
								name="mail"
							/>
						</div>
						<div className="inp">
							<TextField
								value={signUpData.age}
								onChange={handleChange}
								type="number"
								style={{
									width: "90%",
									fontSize: ".5vw",
									height: "3vh",
									outline: "none",
								}}
								variant="outlined"
								label="Age"
								name="age"
							/>
						</div>
						<div className="inp">
							<TextField
								value={signUpData.password}
								onChange={handleChange}
								type="password"
								style={{
									width: "90%",
									fontSize: ".5vw",
									height: "3vh",
									outline: "none",
								}}
								variant="outlined"
								label="Password"
								name="password"
							/>
						</div>
						<div className="inp">
							<TextField
								value={signUpData.confPass}
								onChange={handleChange}
								type="password"
								style={{
									width: "90%",
									fontSize: ".5vw",
									height: "3vh",
									outline: "none",
								}}
								error={
									signUpData.password === signUpData.confPass ? false : true
								}
								variant="outlined"
								label="Confirm Password"
								name="confPass"
							/>
						</div>
					</div>
					<div className="login-forget" style={{ display: "flex" }}>
						<Button
							variant="contained"
							color="primary"
							onClick={(e) => {
								e.preventDefault();
								handleSIgnUp();
							}}
							style={{
								textTransform: "capitalize",
							}}
						>
							Sign Up
						</Button>
						<div variant="subtitle1" className="or">
							OR
						</div>
						<div
							className="sub"
							style={{
								display: "flex",
								justifyContent: "space-evenly",
								alignItems: "center",
								width: "100%",
							}}
						>
							<GoogleLogin
								clientId="171125153728-pd31fnftkqiq4o3803lgt6p9dhmodn21.apps.googleusercontent.com"
								buttonText="Login"
								onSuccess={handleGoogleSignUp}
								onFailure={() => {}}
								cookiePolicy={"single_host_origin"}
								render={(renderProps) => (
									<Button
										variant="contained"
										color="primary"
										onClick={renderProps.onClick}
										style={{
											backgroundColor: "white",
											color: "black",
											borderRadius: ".5rem",
											fontSize: "1em",
											textTransform: "capitalize",
											padding: "0px",
											width: "10rem",
											height: "3rem",
										}}
										disabled={renderProps.disabled}
									>
										<img
											src={google}
											alt="google"
											style={{
												width: "1.3em",
												height: "3vh",
												position: "relative",
												left: "-.5rem",
											}}
										/>
										Google
									</Button>
								)}
							/>
							{/* <Button
								variant="contained"
								color="primary"
								onClick={(e) => {
									e.preventDefault();
									console.log("fb");
								}}
								style={{
									backgroundColor: "white",
									color: "black",
									fontSize: "1em",
									borderRadius: ".7vw",
									textTransform:"capitalize",
									padding:"0px",
								}}
							>
								<img
									src={fb}
									alt="fb"
									style={{
										width: "1.3em",
										height: "3vh",
										position: "relative",
										left: "-.2em",
									}}
								/>
								FaceBook
							</Button> */}
						</div>
						<div
							className="acceptance"
							style={{
								// display: "flex",
								// justifyContent: "space-evenly",
								alignItems: "center",
								width: "90%",
								// paddingTop: "1rem",
								fontSize: ".8em",
							}}
						>
							<div style={{ textAlign: "center" }}>
								By continuing, you agree to Creamzo's
								<Link
									style={{ color: "black", paddingLeft: ".5em" }}
									onClick={() => setopen(false)}
									to="/terms"
								>
									Terms of Service
								</Link>
								,
								<Link
									style={{ color: "black", paddingLeft: ".5em" }}
									onClick={() => setopen(false)}
									to="/terms"
								>
									Privacy policy.
								</Link>
							</div>
							,
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SignUp;
