import { TextField, Button,Link } from "@mui/material";
import React, { useState } from "react";
import "./style/style.css";

const OTP = ({ setopen, setOTP }) => {
	// const [password, setPassword] = useState("");

	// const handleOTP = () => {
	// 	setopen(false);
	// 	setOTP(true);
	// };

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
						Enter the OTP
					</div>
				</div>
				<div className="bottom-header">
					<div className="inputs">
						<div className="inp">
							<TextField
								// value={password}
								onChange={(e) => {
									e.preventDefault();
								}}
								type="password"
								style={{
									width: "100%",
									fontSize: ".8vw",
									outline: "none",
								}}
								variant="outlined"
								label="OTP"
							/>
						</div>
					</div>
					<Button
							variant="contained"
							color="primary"
							onClick={(e) => {
								e.preventDefault();
							}}
							style={{
								textTransform: "capitalize",
							}}
						>
						<Link to="/">Submit</Link>
					</Button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default OTP;
