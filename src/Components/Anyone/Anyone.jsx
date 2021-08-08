import { Typography, Button } from "@material-ui/core";
import React from "react";

const Anyone = () => {
	return (
		<React.Fragment>
			<div
				className="container"
				style={{
					width: "auto",
					height: "80vh",
					display: "flex",
					justifyContent: "start",
					alignItems: "flex-start",
				}}
			>
				<div
					className="text"
					style={{
						width: "40%",
						height: "32vh",
						display: "grid",
						justifyContent: "space-evenly",
						alignItems: "center",
						marginLeft: "auto",
						marginRight: "auto",
						position: "relative",
						left: "6em",
						top: "2em",
					}}
				>
					<Typography
						variant="h4"
						style={{
							fontWeight: "bolder",
							fontSize: "2.4rem",
							textAlign: "center",
						}}
					>
						Anyone can join the community
					</Typography>
					<Typography variant="subtitle1" style={{ textAlign: "center" }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
						perferendis ipsam blanditiis mollitia esse. Quod error voluptatibus
						facere aperiam eligendi cum saepe iure aut. Expedita soluta cum
						itaque deserunt ducimus?
					</Typography>
					<Button
						variant="contained"
						color="primary"
						style={{
							backgroundColor: "black",
							width: "15em",
							height: "3.5em",
							margin: "auto",
						}}
					>
						Join the Community
					</Button>
				</div>

				<div
					className="imgs"
					style={{
						position: "absolute",
					}}
				>
					<div
						className=""
						style={{
							position: "absolute",
							width: "8em",
							height: "12em",
							backgroundColor: "grey",
							top: "-9.4em",
							left: "-3em",
							right: "0em",
							bottom: "0em",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "7em",
							height: "6em",
							backgroundColor: "grey",
							top: "-3em",
							left: "-13em",
							right: "0em",
							bottom: "0em",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "12em",
							height: "12em",
							backgroundColor: "grey",
							top: "6em",
							left: "-18em",
							right: "0em",
							bottom: "0em",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "10em",
							height: "23.5em",
							backgroundColor: "grey",
							top: "20em",
							left: "-16em",
							right: "1em",
							bottom: "0em",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "8em",
							height: "8em",
							backgroundColor: "grey",
							top: "19em",
							left: "-3em",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "16em",
							height: "16em",
							backgroundColor: "grey",
							top: "28em",
							borderRadius: ".5em",
							left: "-1em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "15em",
							height: "15em",
							backgroundColor: "grey",
							top: "-10em",
							left: "77vw",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "15em",
							height: "22em",
							backgroundColor: "grey",
							top: "7em",
							left: "77vw",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "7em",
							height: "7em",
							backgroundColor: "grey",
							top: "-2em",
							left: "70.5vw",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "7em",
							height: "14em",
							backgroundColor: "grey",
							top: "48vh",
							left: "83.3vw",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "12em",
							height: "14em",
							backgroundColor: "grey",
							top: "48vh",
							left: "72.5vw",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "10em",
							height: "10em",
							backgroundColor: "grey",
							top: "29vh",
							left: "68vw",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "8em",
							height: "8em",
							backgroundColor: "grey",
							top: "50vh",
							left: "65vw",
							borderRadius: ".5em",
						}}
					></div>
					<div
						className=""
						style={{
							position: "absolute",
							width: "10em",
							height: "10em",
							backgroundColor: "grey",
							top: "10vh",
							left: "-2vw",
							borderRadius: ".5em",
						}}
					></div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Anyone;
