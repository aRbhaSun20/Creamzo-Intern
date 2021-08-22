import React, { useState, useContext } from "react";

import { Button, TextField } from "@material-ui/core";

import "./style/style.css";
import fb from "./assets/fb.png";
import google from "./assets/google.png";

import { LoginContext, LOGIN_ACTIONS } from "../../Context/Login";

const SignUp = ({ setopen }) => {
	const [mail, setMail] = useState("");
	// eslint-disable-next-line
	const [login, setLogin] = useContext(LoginContext);
	const [password, setPassword] = useState("");
	const [age, setAge] = useState("");

	return (
		<React.Fragment>
			<div className="signup-card">
				<div>
					<div
						className="title"
						style={{
							position: "relative",
							top: "-0.5rem",
							color: "black",
							fontWeight: "normal",
							fontSize: "1.5rem",
						}}
					>
						Hey, Welcome to Creamzo!
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
									width: "20rem",
									fontSize: ".8rrem",
									height: "3rem",
									outline: "none",
								}}
								variant="outlined"
								label="First Name"
							/>
						</div>
						<div className="inp">
							<TextField
								value={mail}
								onChange={(e) => {
									e.preventDefault();
									setMail(e.target.value);
								}}
								type="text"
								style={{
									width: "20rem",
									fontSize: ".8rrem",
									height: "3rem",
									outline: "none",
								}}
								variant="outlined"
								label="Last Name"
							/>
						</div>
						<div className="inp">
							<TextField
								value={mail}
								onChange={(e) => {
									e.preventDefault();
									setMail(e.target.value);
								}}
								type="text"
								style={{
									width: "20rem",
									fontSize: ".8rrem",
									height: "3rem",
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
								type="text"
								style={{
									width: "20rem",
									fontSize: ".8rrem",
									height: "3rem",
									outline: "none",
								}}
								variant="outlined"
								label="Age"
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
									width: "20rem",
									fontSize: ".8rrem",
									height: "3rem",
									outline: "none",
								}}
								variant="outlined"
								label="Password"
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
									width: "20rem",
									fontSize: ".8rrem",
									height: "3rem",
									outline: "none",
								}}
								variant="outlined"
								label="Confirm Password"
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
								backgroundColor: "#d4d4d4",
								fontSize: "1rem",
								color: "black",
							}}
						>
							Sign Up
						</Button>
						<div className="sub">
							<Button
								variant="contained"
								color="primary"
								onClick={(e) => {
									e.preventDefault();
									console.log("google");
								}}
								style={{
									backgroundColor: "#d4d4d4",
									color: "black",
									borderRadius: "1.2rem",
									fontSize: ".6rrem",
								}}
							>
								<img
									src={google}
									alt="google"
									style={{ maxWidth: "2rem", height: "2rem" }}
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
									backgroundColor: "#d4d4d4",
									color: "black",
									fontSize: ".6rrem",
								}}
							>
								<img
									src={fb}
									alt="fb"
									style={{ maxWidth: "2rem", height: "2rem" }}
								/>
								FaceBook
							</Button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SignUp;
