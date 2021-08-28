import { Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
	AddCircleOutline,
	ArrowUpward,
	FavoriteBorder,
	Share,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Conatiner = ({ image, height }) => {
	const [opacity, setOpacity] = useState(0);
	return (
		<div
			className="imglogin"
			style={{ position: "relative" }}
			onMouseEnter={(e) => {
				e.preventDefault();
				setOpacity(1);
			}}
			onMouseLeave={(e) => {
				e.preventDefault();
				setOpacity(0);
			}}
		>
			<img
				src={image}
				alt=""
				onClick={() => {
					console.log("hi");
				}}
				style={{ height: `100%`, borderRadius: "1em" }}
			/>

			<div
				className="details"
				style={{
					position: "absolute",
					height: `8vh`,
					opacity: `${opacity}`,
					zIndex: "1000",
					top: "1vh",
					left: ".5em",
					width: "15vw",
				}}
			>
				<div
					style={{
						display: "flex",
						width: "15vw",
						position: "relative",
						left: "-8.5em",
					}}
				>
					{opacity ? (
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
								width: "100%",
							}}
						>
							<IconButton
								variant="contained"
								style={{
									borderRadius: "1em",
									position: "relative",
									left: "3.5em",
									top: ".5em",
									outline: "none",
								}}
							>
								<FavoriteBorder
									style={{
										color: "white",
										fontSize: "1.5rem",
									}}
								/>
							</IconButton>
						</div>
					) : null}
					{opacity ? (
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
								width: "100%",
								position: "relative",
								left: "8em",
								top: ".5em",
							}}
						>
							<IconButton
								variant="contained"
								style={{
									borderRadius: "1em",
									outline: "none",
								}}
							>
								<AddCircleOutline
									style={{ color: "white", fontSize: "1.5rem" }}
								/>
							</IconButton>
						</div>
					) : null}
				</div>
			</div>
			<div
				className="details"
				style={{
					position: "absolute",
					height: `8vh`,
					opacity: `${opacity}`,
					zIndex: "1000",
					bottom: "-6vh",
					left: "9em",
					width: "15vw",
				}}
			>
				<div
					style={{
						display: "flex",
						width: "15vw",
						position: "relative",
						left: "-8.5em",
					}}
				>
					{opacity ? (
						<div
							className="bottom"
							style={{
								display: "flex",
								width: "21vw",
								alignItems: "center",
								position: "absolute",
								justifyContent: "space-between",
								bottom: ".3em",
								marginLeft: "1em",
							}}
						>
							<Link to="/boardDisplay">
								<Button
									variant="contained"
									style={{
										borderRadius: "1em",
										position: "relative",
										bottom: "0.5rem",
										outline: "none",
										fontSize: ".7rem",
									}}
								>
									<ArrowUpward
										style={{
											transform: "rotate(45deg)",
											marginRight: ".5em",
											fontSize: "1rem",
										}}
									/>
									Link
								</Button>
							</Link>
							<div
								className="end"
								style={{ position: "relative", left: "-7.5em", bottom: ".5em" }}
							>
								<IconButton style={{ outline: "none" }}>
									<GetAppIcon
										style={{
											color: "white",
											fontSize: "1.2rem",
											position: "relative",
											bottom: "0em",
										}}
									/>
								</IconButton>
								<IconButton style={{ outline: "none" }}>
									<Share
										style={{
											color: "white",
											fontSize: "1.2rem",
											position: "relative",
											bottom: "0em",
										}}
									/>
								</IconButton>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Conatiner;
