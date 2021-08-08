import { Typography, Button } from "@material-ui/core";
import React from "react";

const Making = () => {
	return (
		<React.Fragment>
			<div
				className="conatiner"
				style={{
					width: "auto",
					height: "90vh",
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					justifyContent: "center",
					alignItems: "center",
					padding: "1em",
				}}
			>
				<div
					className="text"
					style={{
						width: "65%",
						display: "felx",
						flexDirection: "column",
						height: "auto",
						justifyContent: "space-evenly",
						margin: "auto",
						position: "relative",
						left: "6em",
					}}
				>
					<Typography
						variant="h4"
						style={{
							paddingBottom: ".6em",
							fontWeight: "bolder",
							fontSize: "2.4rem",
						}}
					>
						Make something awesome
					</Typography>
					<Typography
						variant="subtitle1"
						style={{ paddingBottom: "2em", textAlign: "justify" }}
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
						perferendis ipsam blanditiis mollitia esse. Quod error voluptatibus
						facere aperiam eligendi cum saepe iure aut. Expedita soluta cum
						itaque deserunt ducimus?
					</Typography>
					<Button
						variant="contained"
						style={{
							backgroundColor: "black",
							width: "15em",
							height: "3.5em",
							margin: "auto",
						}}
						color="primary"
					>
						Join the Community
					</Button>
				</div>
				<div
					className="img"
					style={{
						width: "75%",
						height: "70vh",
						position: "relative",
						left: "-2em",
					}}
				>
					<div
						className="img"
						style={{
							position: "absolute",
							top: "0em",
							right: "0em",
							width: "20em",
							height: "20em",
							backgroundColor: "grey",
							borderRadius: ".5em",
						}}
					>
						{/* <img src="" alt="" /> */}
					</div>
					<div
						className="img"
						style={{
							position: "absolute",
							top: "0em",
							left: "16em",
							width: "8em",
							height: "8em",
							backgroundColor: "grey",
							borderRadius: ".5em",
						}}
					>
						{/* <img src="" alt="" /> */}
					</div>
					<div
						className="img"
						style={{
							position: "absolute",
							top: "15vh",
							left: "5vw",
							width: "13em",
							height: "16em",
							backgroundColor: "grey",
							borderRadius: ".5em",
						}}
					>
						{/* <img src="" alt="" /> */}
					</div>
					<div
						className="img"
						style={{
							position: "absolute",
							bottom: "0vh",
							right: "0vw",
							width: "12em",
							height: "12em",
							backgroundColor: "grey",
							borderRadius: ".5em",
						}}
					>
						{/* <img src="" alt="" /> */}
					</div>
					<div
						className="img"
						style={{
							position: "absolute",
							bottom: "9vh",
							right: "10.5vw",
							width: "12em",
							height: "12em",
							backgroundColor: "grey",
							borderRadius: ".5em",
						}}
					>
						{/* <img src="" alt="" /> */}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Making;
