import React, { useState, useContext } from "react";

import { Button, TextField } from "@material-ui/core";

import "./style/style.css";
import fb from "./assets/fb.png";
import google from "./assets/google.png";

import CloseIcon from "@material-ui/icons/Close";

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
					<div className="title" style={{ position: "relative" }}>
						Hey, Welcome to Cremzo!
						<CloseIcon
							onClick={() => {
								setopen(false);
							}}
							style={{
								position: "relative",
								right: "-2.9em",
								top: "-.1em",
								cursor: "pointer",
							}}
						/>
					</div>
					<div className="buttons-gp">
						<Button
							variant="contained"
							color="primary"
							onClick={(e) => {
								e.preventDefault();
								console.log("google");
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
					<TextField
						label="Email"
						value={mail}
						onChange={(e) => {
							e.preventDefault();
							setMail(e.target.value);
						}}
						placeholder="name@gmail.com"
						variant="outlined"
					/>
					<TextField
						label="Create Password"
						type="password"
						value={password}
						onChange={(e) => {
							e.preventDefault();
							setPassword(e.target.value);
						}}
						placeholder="*******"
						variant="outlined"
					/>
					<TextField
						label="Age"
						value={age}
						onChange={(e) => {
							e.preventDefault();
							setAge(e.target.value);
						}}
						variant="outlined"
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
