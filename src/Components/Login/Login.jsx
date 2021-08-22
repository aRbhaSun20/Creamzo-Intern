import React, { useContext, useState } from "react";

import { Button, TextField } from "@material-ui/core";

import "./style/style.css";
import fb from "./assets/fb.png";
import google from "./assets/google.png";

import { LoginContext, LOGIN_ACTIONS } from "../../Context/Login";
import { Link } from "react-router-dom";

const Login = ({ setopen, setSignopen }) => {
	const [mail, setMail] = useState("");
	// eslint-disable-next-line
	const [login, setLogin] = useContext(LoginContext);
	// eslint-disable-next-line
	const [password, setPassword] = useState("");

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
							fontSize: "1.8vw",
							fontWeight: "bold",
						}}
					>
						Welcome Back to Creamzo!
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
									width: "20vw",
									fontSize: ".8vw",
									height: "3vh",
									outline: "none",
								}}
								variant="outlined"
								label="Email"
							/>
						</div>
						<div className="inp">
							<TextField
								value={mail}
								onChange={(e) => {
									e.preventDefault();
									setMail(e.target.value);
								}}
								type="password"
								style={{
									width: "20vw",
									fontSize: ".8vw",
									height: "3vh",
									outline: "none",
								}}
								variant="outlined"
								label="Password"
							/>
						</div>
					</div>
					<div className="login-forget" style={{ display: "flex" }}>
						<Button
							variant="contained"
							color="primary"
							onClick={(e) => {
								e.preventDefault();
								setLogin({ type: LOGIN_ACTIONS.LOGIN });
								setopen(false);
							}}
							style={{
								backgroundColor: "red",
								fontSize: ".8vw",
								color: "white",
								width: "8rem",
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
							<Button
								variant="contained"
								color="primary"
								onClick={(e) => {
									e.preventDefault();
									console.log("google");
								}}
								style={{
									backgroundColor: "white",
									color: "black",
									borderRadius: ".5rem",
									fontSize: ".7vw",
								}}
							>
								<img
									src={google}
									alt="google"
									style={{
										width: "1.5vw",
										height: "3vh",
										position: "relative",
										left: "-.5rem",
									}}
								/>
								Google
							</Button>
							<Button
								variant="contained"
								color="primary"
								onClick={(e) => {
									e.preventDefault();
									console.log("fb");
								}}
								style={{
									backgroundColor: "white",
									color: "black",
									fontSize: ".9rem",
									borderRadius: ".7vw",
								}}
							>
								<img
									src={fb}
									alt="fb"
									style={{
										width: "1.5vw",
										height: "3vh",
										position: "relative",
										left: "-.5em",
									}}
								/>
								FaceBook
							</Button>
						</div>
						<div
							className="acceptance"
							style={{
								display: "flex",
								justifyContent: "space-evenly",
								alignItems: "center",
								width: "70%",
								paddingTop: "1rem",
							}}
						>
							<div style={{ textAlign: "center" }}>
								By continuing, you agree to Creamzo's
								<Link
									style={{ color: "black", paddingLeft: ".5em" }}
									to="/terms"
									onClick={() => setopen(false)}
								>
									Terms of Service
								</Link>
								,
								<Link
									style={{ color: "black", paddingLeft: ".5em" }}
									to="/terms"
									onClick={() => setopen(false)}
								>
									Privacy policy.
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
