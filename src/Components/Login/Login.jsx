import React, { useContext, useState } from "react";

import { Button, TextField } from "@material-ui/core";

import "./style/style.css";
// import fb from "./assets/fb.png";
import google from "./assets/google.png";

import { LoginContext, LOGIN_ACTIONS } from "../../Context/Login";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
// eslint-disable-next-line
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";
import { useSnackbar } from "notistack";

const Login = ({ setopen, setSignopen, setForget, setReset }) => {
	const [mail, setMail] = useState("");
	// eslint-disable-next-line
	const [login, setLogin] = useContext(LoginContext);
	// eslint-disable-next-line
	const [password, setPassword] = useState("");

	const { enqueueSnackbar } = useSnackbar();

	const handleLogin = () => {
		axiosSendRequest(AXIOS_ACTIONS.POST, "login", {
			email: mail,
			passwd: password,
		})
			.then((data) => {
				console.log(data);
				setLogin({ type: LOGIN_ACTIONS.LOGIN });
				localStorage.setItem(
					"creamzoUser",
					JSON.stringify({
						token: data.token,
						fname: data.user.fname,
						lname: data.user.lname,
						age: data.user.age,
						email: data.user.email,
						creamzoId: data.user.creamzoId,
						following: data.user.following,
						followers: data.user.followers,
						collections: data.user.collections,
					})
				);
				setopen(false);
				enqueueSnackbar("LogIn Successful", { variant: "success" });
			})
			.catch((e) => {
				enqueueSnackbar("LogIn Failed", { variant: "error" });
			});
	};

	const handleGoogleSignUp = (response) => {
		axiosSendRequest(AXIOS_ACTIONS.GOOGLE_SIGNUP, "googlelogin", {
			tokenId: response.tokenId,
		})
			.then((res) => {
				setLogin({ type: LOGIN_ACTIONS.LOGIN });
				localStorage.setItem(
					"creamzoUser",
					JSON.stringify({
						token: res.token,
						fname: res.user.fname,
						lname: "",
						age: 0,
						email: res.user.email,
						creamzoId: res.user.creamzoId,
						following: [],
						followers: [],
						collections: [],
					})
				);
				setopen(false);
				enqueueSnackbar("LogIn Successful", { variant: "success" });
			})
			.catch((e) => {
				enqueueSnackbar("LogIn Failed", { variant: "error" });
			});
	};

	// eslint-disable-next-line
	const [forgotPasswordModal, setforgotPasswordModal] = useState(false);

	return (
		<React.Fragment>
			<div className="login-card">
				<div className="top-header">
					<div
						className="title"
						style={{
							position: "relative",
							top: "-0.5rem",
							color: "black",
							fontSize: "1.5rem",
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						Welcome Back to Creamzo!
					</div>
					{/*<div className="dont-have">
						Don't have an account?
						<Link>
							<span
								onClick={() => {
									setopen(false);
									setSignopen(true);
								}}
							>
								Signup
							</span>
						</Link>
					</div>*/}
				</div>
				<div className="bottom-header">
					<div className="inputs">
						<div className="inp">
							<TextField
								value={mail}
								onChange={(e) => {
									e.preventDefault();
									setMail(e.target.value);
								}}
								type="text"
								style={{
									width: "100%",
									fontSize: ".8vw",
									outline: "none",
								}}
								variant="outlined"
								label="Email"
							/>
						</div>
						<div className="inp">
							<TextField
								value={password}
								onChange={(e) => {
									e.preventDefault();
									setPassword(e.target.value);
								}}
								type="password"
								style={{
									width: "100%",
									fontSize: ".8vw",
									outline: "none",
								}}
								variant="outlined"
								label="Password"
							/>
						</div>
					</div>
					<div
						className="login-forget"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<Button
							variant="contained"
							color="primary"
							onClick={(e) => {
								e.preventDefault();
								handleLogin();
							}}
							style={{
								// backgroundColor: "red",
								// fontSize: ".8vw",
								// color: "white",
								// width: "8rem",
								textTransform: "capitalize",
							}}
						>
							Log In
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
								onFailure={(res) => {
									console.log(res);
								}}
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
								Facebook
							</Button> */}
						</div>
						<div
							className="acceptance"
							style={{
								display: "flex",
								justifyContent: "space-evenly",
								alignItems: "center",
								width: "90%",
								paddingTop: ".7rem",
							}}
						>
							<div style={{ textAlign: "center", fontSize: ".8rem" }}>
								By continuing, you agree to Creamzo's
								<Link
									style={{
										color: "black",
										paddingLeft: ".5em",
										textDecoration: "underline",
									}}
									to="/terms"
									onClick={() => setopen(false)}
								>
									Terms of Service
								</Link>
								,
								<Link
									style={{
										color: "black",
										textDecoration: "underline",
										paddingLeft: ".5em",
									}}
									to="/privacy"
									onClick={() => setopen(false)}
								>
									Privacy policy.
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="dont-have">
					Don't have an account?
					<Link>
						<span
							onClick={() => {
								setopen(false);
								setSignopen(true);
							}}
						>
							Signup
						</span>
					</Link>
				</div>
				<div
					className="dont-have"
					style={{
						display: "flex",
						width: "45%",
						justifyContent: "space-around",
						alignItems: "center",
						margin: "auto",
					}}
				>
					<div
						className="re"
						style={{ fontSize: ".7rem", color: "red", cursor: "pointer" }}
						onClick={() => {
							setopen(false);
							setReset(true);
						}}
					>
						Reset Password ?
					</div>
					<div
						className="re"
						onClick={() => {
							setopen(false);
							setForget(true);
						}}
						style={{ fontSize: ".7rem", color: "red", cursor: "pointer" }}
					>
						Forget Password ?
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
