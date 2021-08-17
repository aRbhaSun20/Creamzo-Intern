import { Typography, Button } from "@material-ui/core";
import React from "react";

const Making = () => {
	const images = [
		"https://picsum.photos/200/300?image=1050",
		"https://picsum.photos/400/400?image=1039",
		"https://picsum.photos/400/400?image=1080",
		"https://picsum.photos/200/200?image=997",
		"https://picsum.photos/500/400?image=287",
	];
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
							top: "-4em",
							right: "-4em",
							width: "24em",
							height: "24em",
						}}
					>
						<img
							src={images[0]}
							alt="pic"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "1.5em",
							}}
						/>
					</div>
					<div
						className="img"
						style={{
							position: "absolute",
							top: "-2em",
							left: "16em",
							width: "8em",
							height: "8em",
						}}
					>
						<img
							src={images[1]}
							alt="pic"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "1.5em",
							}}
						/>
					</div>
					<div
						className="img"
						style={{
							position: "absolute",
							top: "11vh",
							left: "8.5vw",
							width: "13em",
							height: "16em",
						}}
					>
						<img
							src={images[2]}
							alt="pic"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "1.5em",
							}}
						/>
					</div>
					<div
						className="img"
						style={{
							position: "absolute",
							bottom: "17vh",
							right: "-3vw",
							width: "16em",
							height: "12em",
						}}
					>
						<img
							src={images[3]}
							alt="pic"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "1.5em",
							}}
						/>
					</div>
					<div
						className="img"
						style={{
							position: "absolute",
							bottom: "13vh",
							right: "10.5vw",
							width: "12em",
							height: "12em",
						}}
					>
						<img
							src={images[4]}
							alt="pic"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "1.5em",
							}}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Making;
