import React, { useState } from "react";

import { Button, TextField } from "@material-ui/core";

import "./style/style.css";
import fb from "./assets/fb.png";
import google from "./assets/google.png";

const Login = () => {
	const [mail, setMail] = useState("");

	const [password, setPassword] = useState("");

	return (
		<React.Fragment>
			<div className="login-screen">
				<div className="illustrator">Illustrator</div>
				<div className="login-card">
					<div className="top-header">
						<div className="title">Hello, Welcome Back!</div>
						<div className="buttons-gp">
							<Button
								variant="contained"
								color="primary"
								onClick={(e) => {
									e.preventDefault();
									console.log("google");
								}}
							>
								<img src={google} alt="google" />
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
								<img src={fb} alt="fb" />
								FaceBook
							</Button>
						</div>
						<div className="or">or</div>
					</div>
					<div className="bottom-header">
						<TextField
							required
							id="outlined-required"
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
							required
							id="outlined-required"
							label="Password"
							type="password"
							value={password}
							onChange={(e) => {
								e.preventDefault();
								setPassword(e.target.value);
							}}
							placeholder="*******"
							variant="outlined"
						/>
						<div className="login-forget">
							<Button
								variant="contained"
								color="primary"
								onClick={(e) => {
									e.preventDefault();
									console.log("submit");
								}}
							>
								Log In
							</Button>
							<div className="forget">Forget Password?</div>
						</div>
						<div className="dont-have">
							Don’t have an account?
							<span
								onClick={(e) => {
									e.preventDefault();
									console.log("sign up");
								}}
							>
								Sign up
							</span>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
