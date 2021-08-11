import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Style/style.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
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
					height: "30vh",
					backgroundColor: "#353535",
					overflow: "hidden",
					gridGap: "2em",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					className="bottom"
					style={{
						display: "grid",
						paddingTop: "2em",
						gridTemplateColumns: "1fr 1fr 1fr",
						width: "100%",
						gridGap: "5em",
						justifyContent: "center",
						alignItems: "start",
						height: "20vh",
						position: "relative",
						left: "5em",
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
							corporis a fugiat, ea commodi, autem pariatur quia eaque ipsam ad
							excepturi sit voluptas!
						</Typography>
					</div>
					<div className="footer-left">
						<Typography
							variant="h4"
							style={{ color: "white", paddingBottom: ".5em" }}
						>
							<Link to="/" style={{ color: "white" }}>
								Resources
							</Link>
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ width: "35em", textAlign: "justify", color: "white" }}
						>
							<Link to="/blog" style={{ color: "white" }}>
								Blog
							</Link>
						</Typography>
						<Typography
							variant="subtitle1"
							style={{ width: "35em", textAlign: "justify", color: "white" }}
						>
							<Link to="/" style={{ color: "white" }}>
								Careers
							</Link>
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
						<input
							type="text"
							style={{ height: "3em", padding: "1em", borderRadius: ".5em",width:"20em" }}
							placeholder="Email Address"
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

				<div
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						alignItems: "center",
						width: "100%",
						height: "5vh",
					}}
				>
					<div className="icon">
						<Link to="/">
							<FacebookIcon fontSize="large" style={{ color: "white" }} />
						</Link>
					</div>
					<div className="icon">
						<Link to="/">
							<LinkedIn fontSize="large" style={{ color: "white" }} />
						</Link>
					</div>
					<div className="icon">
						<Link to="/">
							<TwitterIcon fontSize="large" style={{ color: "white" }} />
						</Link>
					</div>
					<div className="icon">
						<Link to="/">
							<InstagramIcon fontSize="large" style={{ color: "white" }} />
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default EndSection;
