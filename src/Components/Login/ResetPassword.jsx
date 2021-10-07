import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import "./style/style.css";

const Resetpassword = ({ setopen, setLoginOpen }) => {
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");

	const handleForget = () => {
		setopen(false);
		setLoginOpen(true);
	};

	return (
		<React.Fragment>
			<div
				className="login-card"
				style={{ height: "50%", width: "30%", paddingBottom: "0rem" }}
			>
				<div className="top-header" style={{ width: "25vw" }}>
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
						Reset Password ?
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
							paddingTop: "0rem",
							marginTop: "0rem",
						}}
					>
						<Button
							variant="contained"
							color="primary"
							onClick={(e) => {
								e.preventDefault();
								handleForget();
							}}
							style={{
								textTransform: "capitalize",
							}}
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resetpassword;
