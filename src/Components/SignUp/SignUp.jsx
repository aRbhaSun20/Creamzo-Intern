import React, { useState, useContext } from "react";

import { Button } from "@material-ui/core";

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
			<div className="login-card">
				<div className="top-header">
					<div
						className="title"
						style={{
							position: "relative",
							top: "-0.5em",
							color: "black",
							fontWeight: "normal",
							fontSize: "1.5rem",
						}}
					>
						Hey, Welcome to Creamzo!
					</div>
					<div className="buttons-gp">
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
								width: "12em",
								borderRadius: "1.2em",
								fontSize: ".6rem",
							}}
						>
							<img
								src={google}
								alt="google"
								style={{ maxWidth: "2em", height: "2em" }}
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
								width: "13em",
								fontSize: ".6rem",
							}}
						>
							<img
								src={fb}
								alt="fb"
								style={{ maxWidth: "2em", height: "2em" }}
							/>
							FaceBook
						</Button>
					</div>
					<div className="or">or</div>
				</div>
				<div className="bottom-header">
					<input
						value={mail}
						onChange={(e) => {
							e.preventDefault();
							setMail(e.target.value);
						}}
						type="text"
						style={{
							width: "20em",
							fontSize: ".8rem",
							height: "3em",
						}}
						placeholder="name@gmail.com"
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => {
							e.preventDefault();
							setPassword(e.target.value);
						}}
						style={{
							width: "20em",
							fontSize: ".8rem",
							height: "3em",
						}}
						placeholder="*******"
					/>
					<input
						value={age}
						onChange={(e) => {
							e.preventDefault();
							setAge(e.target.value);
						}}
						style={{
							width: "20em",
							fontSize: ".8rem",
							height: "3em",
						}}
					/>
					<div className="login-forget">
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
								fontSize: ".6rem",
								color: "black",
							}}
						>
							Continue
						</Button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SignUp;
