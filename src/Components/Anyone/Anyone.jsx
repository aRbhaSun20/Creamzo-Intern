import { Typography, Button } from "@material-ui/core";
import React from "react";

const Anyone = () => {
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
							fontSize: "2.4rem",
							textAlign: "center",
						}}
					>
						Anyone can join the community
					</Typography>
					<Typography
						variant="subtitle1"
						style={{ textAlign: "center", width: "50%", margin: "auto" }}
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
							width: "15em",
							height: "3.5em",
							margin: "auto",
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
					}}
				>
					<div
						className="imgs"
						style={{
							position: "absolute",
							top: "0em",
						}}
					>
						<div
							className=""
							style={{
								position: "absolute",
								width: "12em",
								height: "18em",
								top: "-8em",
								left: "-6em",
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
							className=""
							style={{
								position: "absolute",
								width: "13em",
								height: "13em",
								top: "-4.5em",
								left: "8em",
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
							className=""
							style={{
								position: "absolute",
								width: "24em",
								height: "16em",
								top: "11em",
								left: "-6em",
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
							className=""
							style={{
								position: "absolute",
								width: "13em",
								height: "13em",
								top: "28em",
								left: "-6em",
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
							className=""
							style={{
								position: "absolute",
								width: "15em",
								height: "16em",
								top: "28em",
								left: "8em",
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
							top: "0em",
						}}
					>
						<div
							className=""
							style={{
								position: "absolute",
								width: "12em",
								height: "18em",
								top: "-8em",
								right: "-6em",
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
							className=""
							style={{
								position: "absolute",
								width: "13em",
								height: "13em",
								top: "-4.5em",
								right: "8em",
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
							className=""
							style={{
								position: "absolute",
								width: "24em",
								height: "16em",
								top: "11em",
								right: "-6em",
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
							className=""
							style={{
								position: "absolute",
								width: "13em",
								height: "13em",
								top: "28em",
								right: "-6em",
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
							className=""
							style={{
								position: "absolute",
								width: "15em",
								height: "16em",
								top: "28em",
								right: "8em",
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
			</div>
		</React.Fragment>
	);
};

export default Anyone;
