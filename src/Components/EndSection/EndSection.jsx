import { Typography, TextField, InputAdornment } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Style/style.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";

import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const EndSection = () => {
	return (
		<React.Fragment>
			<div
				className="end"
				style={{
					width: "auto",
					display: "grid",
					gridTemplateRows: "1fr 1fr",
					height: "55vh",
					backgroundColor: "#353535",
					margin: "auto",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						display: "grid",
						gridTemplateRows: "1fr 1fr",
						gridGap: "3em",
						justifyContent: "center",
						alignItems: "center",
						placeContent: "center",
					}}
				>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr",
							height: "10vh",
							width: "68vw",
							borderBottom: "2px solid grey",
							paddingBottom: "2em",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "space-evenly",
								width: "20vw",
								margin: "auto",
								height: "10vh",
							}}
						>
							<LocationOnIcon fontSize="medium" style={{ color: "white" }} />
							<p style={{ color: "white" }}>
								<span>address to be provided</span> Bangalore, India
							</p>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "space-evenly",
								width: "20vw",
								margin: "auto",
								height: "10vh",
								paddingLeft: "5em",
							}}
						>
							<CallIcon fontSize="medium" style={{ color: "white" }} />
							<p>
								<a
									href="tel:+911234567890"
									style={{ color: "white", textDecoration: "none" }}
								>
									+911234567890
								</a>
							</p>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "space-evenly",
								width: "20vw",
								margin: "auto",
								height: "10vh",
							}}
						>
							<MailIcon fontSize="medium" style={{ color: "white" }} />
							<p style={{ color: "white" }}>
								<a
									href="mailto:support@company.com"
									style={{ color: "white", textDecoration: "none" }}
								>
									creamzo@gamil.com
								</a>
							</p>
						</div>
					</div>

					<div
						className="bottom"
						style={{
							display: "grid",
							gridTemplateColumns: "1fr .5fr 1fr",
							width: "72vw",
							overflow: "hidden",
							gridGap: "5em",
							backgroundColor: "#353535",
							justifyContent: "center",
							alignItems: "start",
							height: "20vh",
							position: "relative",
							top: "-2em",
							paddingLeft: "5em",
							// left: "5em",
						}}
					>
						<div className="footer-left">
							<Typography
								variant="h4"
								style={{ color: "white", paddingBottom: ".5em" }}
							>
								About
							</Typography>
							<Typography
								variant="subtitle1"
								style={{
									width: "28em",
									textAlign: "justify",
									color: "white",
								}}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
								dolorum cumque nam accusantium laudantium voluptates iusto
								corporis a fugiat, ea commodi, autem pariatur quia eaque ipsam
								ad excepturi sit voluptas!
							</Typography>
						</div>
						<div className="footer-left" style={{ width: "15vw" }}>
							<Typography
								variant="h4"
								style={{ color: "white", paddingBottom: ".5em" }}
							>
								Resources
							</Typography>
							<Typography
								variant="subtitle1"
								style={{ width: "35em", textAlign: "justify", color: "white" }}
							>
								Blog
							</Typography>
							<Typography
								variant="subtitle1"
								style={{ width: "35em", textAlign: "justify", color: "white" }}
							>
								Careers
							</Typography>
							<Typography
								variant="subtitle1"
								style={{ width: "35em", textAlign: "justify", color: "white" }}
							>
								<Link to="/terms" style={{ color: "white" }}>
									Terms and Conditions
								</Link>
							</Typography>
						</div>
						<div className="footer-left">
							<Typography
								variant="h4"
								style={{ color: "white", paddingBottom: ".5em" }}
							>
								Subscribe
							</Typography>
							<TextField
								label="Email Address"
								variant="outlined"
								id="standard-secondary"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<ArrowForwardIcon style={{ color: "white" }} />
										</InputAdornment>
									),
								}}
							/>
							<Typography
								variant="subtitle1"
								style={{
									width: "35em",
									textAlign: "justify",
									color: "white",
									paddingTop: "1em",
								}}
								color="secondary"
							>
								Get digital marketing updates in your mailbox
							</Typography>
						</div>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						alignItems: "center",
						width: "100%",
						backgroundColor: "#4d4d4d",
						height: "10vh",
					}}
				>
					<div className="icon">
						<Link to="/">
							<FacebookIcon fontSize="large" style={{ color: "white" }} />
						</Link>
					</div>
					<div className="icon">
						<Link to="/">
							<GitHubIcon fontSize="large" style={{ color: "white" }} />
						</Link>
					</div>
					<div className="icon">
						<Link to="/">
							<TwitterIcon fontSize="large" style={{ color: "white" }} />
						</Link>
					</div>
<<<<<<< HEAD
				</div>
				<div className="footer-right">
					<p className="footer-company-about">
						<span>About the company</span>
						Creamzo’s motto is to motivate people who are passionate, creative, and fun-loving. It’s the largest collection of Ideas, quotes, and photographs, DIY, and crafts.
					</p>
					<div className="footer-icons">
						<a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
						<a href="https://www.facebook.com/"><i className="fa fa-twitter" /></a>
						<a href="https://www.facebook.com/"><i className="fa fa-linkedin" /></a>
						<a href="https://www.facebook.com/"><i className="fa fa-github" /></a>
=======
					<div className="icon">
						<Link to="/">
							<InstagramIcon
								fontSize="large"
								style={{ color: "white", width: "10em" }}
							/>
						</Link>
>>>>>>> 5f5685243b1ebd895410b653739f15a6047926f8
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default EndSection;
