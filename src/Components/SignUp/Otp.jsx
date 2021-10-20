import { TextField, Button } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import "./style/style.css";

const OTP = ({ otp, setopen, handleSIgnUp }) => {
	const [password, setPassword] = useState("");
	const { enqueueSnackbar } = useSnackbar();

	const handleOTP = () => {
		if (password !== 0 && otp !== 0) {
			if (password === otp) {
				setopen(false);
				enqueueSnackbar("otp verification is successful", {
					variant: "success",
				});
				handleSIgnUp();
			} else {
				enqueueSnackbar("otp verification is failed try again", {
					variant: "error",
				});
			}
		}
		console.log(password,otp)
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
						Enter the OTP
					</div>
				</div>
				<div className="bottom-header">
					<div className="inputs">
						<div className="inp">
							<TextField
								value={password}
								onChange={(e) => {
									let val = parseInt(e.target.value);
									e.preventDefault();
									if (!isNaN(val)) setPassword(val);
									else setPassword("")
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
							handleOTP();
						}}
						style={{
							textTransform: "capitalize",
						}}
					>
						Submit
					</Button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default OTP;
