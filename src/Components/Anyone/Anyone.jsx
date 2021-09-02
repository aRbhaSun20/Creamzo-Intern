import { Typography, Button } from "@material-ui/core";
import React from "react";
import img from "../About/assets/img/art.jpg";
import img1 from "../About/assets/img/diy.jpg";
import img2 from "../About/assets/img/dog.jpg";
import img3 from "../About/assets/img/quotes.jpg";
const Anyone = () => {
  const images = [img, img1, img2, img3, img3];
  return (
		<React.Fragment>
			<div
				className="container"
				style={{
					width: "100vw",
					height: "80vh",
					display: "flex",
					justifyContent: "start",
					alignItems: "flex-start",
				}}
			>
				<div
					className="text"
					style={{
						width: "100%",
						height: "32vh",
						display: "grid",
						justifyContent: "space-evenly",
						alignItems: "center",
					}}
				>
					<Typography
						variant="h4"
						style={{
							fontWeight: "bolder",
							fontSize: "1.8vw",
							textAlign: "center",
						}}
					>
						Anyone can join the community
					</Typography>
					<Typography
						style={{
							textAlign: "center",
							fontSize: ".8vw",
							width: "50%",
							margin: "auto",
						}}
					>
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
							width: "12vw",
							height: "5vh",
							margin: "auto",
							fontSize: ".8vw",
						}}
					>
						Join the Community
					</Button>
				</div>

				<div
					className="left"
					style={{
						width: "100vw",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						maxHeight: "100vh",
						overflow: "hidden",
					}}
				>
					<div
						className="imgs"
						style={{
							position: "absolute",
							top: "0rem",
						}}
					>
						<div
							className=""
							style={{
								position: "absolute",
								width: "12vw",
								height: "28vh",
								top: "-12vh",
								left: "-4vw",
							}}
						>
							<img
								src={images[0]}
								alt="pic"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1.5rem",
								}}
							/>
						</div>
						<div
							className=""
							style={{
								position: "absolute",
								width: "12vw",
								height: "24vh",
								top: "-6vh",
								left: "9vw",
							}}
						>
							<img
								src={images[1]}
								alt="pic"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1.5rem",
								}}
							/>
						</div>
						<div
							className=""
							style={{
								position: "absolute",
								width: "16vw",
								height: "25vh",
								top: "20vh",
								left: "-5vw",
							}}
						>
							<img
								src={images[2]}
								alt="pic"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1.5rem",
								}}
							/>
						</div>
						<div
							className=""
							style={{
								position: "absolute",
								width: "16vw",
								height: "20vh",
								top: "48vh",
								left: "-5vw",
							}}
						>
							<img
								src={images[3]}
								alt="pic"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1.5rem",
								}}
							/>
						</div>
						<div
							className=""
							style={{
								position: "absolute",
								width: "20vw",
								height: "30vh",
								top: "38vh",
								left: "13vw",
							}}
						>
							<img
								src={images[4]}
								alt="pic"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1.5rem",
								}}
							/>
						</div>
					</div>
				</div>
				<div
					className="right"
					style={{
						width: "100vw",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
				>
					<div
						className="imgs"
						style={{
							position: "absolute",
							top: "0rem",
						}}
					>
						<div
							className=""
							style={{
								position: "absolute",
								width: "12vw",
								height: "28vh",
								top: "-12vh",
								right: "-4vw",
							}}
						>
							<img
								src={images[0]}
								alt="pic"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1.5rem",
								}}
							/>
						</div>
						<div
							className=""
							style={{
								position: "absolute",
								width: "12vw",
								height: "24vh",
								top: "-6vh",
								right: "9vw",
							}}
						>
							<img
								src={images[1]}
								alt="pic"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1.5rem",
								}}
							/>
						</div>
						<div
							className=""
							style={{
								position: "absolute",
								width: "16vw",
								height: "25vh",
								top: "20vh",
								right: "-5vw",
							}}
						>
							<img
								src={images[2]}
								alt="pic"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1.5rem",
								}}
							/>
						</div>
						<div
							className=""
							style={{
								position: "absolute",
								width: "16vw",
								height: "20vh",
								top: "48vh",
								right: "-5vw",
							}}
						>
							<img
								src={images[3]}
								alt="pic"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1.5rem",
								}}
							/>
						</div>
						<div
							className=""
							style={{
								position: "absolute",
								width: "20vw",
								height: "30vh",
								top: "38vh",
								right: "13vw",
							}}
						>
							<img
								src={images[4]}
								alt="pic"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "1.5rem",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Anyone;