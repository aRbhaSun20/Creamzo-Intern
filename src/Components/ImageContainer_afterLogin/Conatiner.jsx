import { Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
	AddCircleOutline,
	ArrowUpward,
	FavoriteBorder,
	Share,
} from "@material-ui/icons";
import {  useHistory } from "react-router-dom";
import "./style/style.css";

const Conatiner = (props) => {
	let image = props.image;
	let height = props.height;
	const [opacity, setOpacity] = useState(0);
	let history = useHistory();
	return (
		<div
			className="imglogin"
			style={{ position: "relative", height: { height } }}
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
				className="imgCont"
				height={height}
				style={{ borderRadius: "1em" }}
				onClick={() => history.push("/boardDisplay")}
			/>

			{opacity ? (
				<div
					style={{
						display: "flex",
						width: "100%",
						position: "absolute",
						justifyContent: "center",
						alignItems: "center",
						top: "0",
					}}
				>
					<div
						style={{
							display: "flex",
							width: "90%",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<IconButton
							variant="contained"
							style={{
								borderRadius: "1em",
								// position: "relative",
								// left: "3.5em",
								// top: ".5em",
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
				</div>
			) : null}

			{opacity ? (
				<div
					style={{
						display: "flex",
						width: "100%",
						position: "absolute",
						justifyContent: "center",
						alignItems: "center",
						bottom: "1rem",
					}}
				>
					<div
						style={{
							display: "flex",
							width: "85%",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Button
							variant="contained"
							style={{
								borderRadius: "1em",
								// position: "relative",
								width: "6rem",
								// bottom: "0.5rem",
								outline: "none",
								textTransform: "capitalize",
								// fontSize: ".7rem",
							}}
							onClick={() => history.push("/boardDisplay")}
						>
							<ArrowUpward
								style={{
									transform: "rotate(45deg)",
									// marginRight: ".5em",
									width: "50%",
									fontSize: "1rem",
								}}
							/>
							Link
						</Button>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								width: "4rem",
							}}
						>
							<IconButton style={{ outline: "none", padding: "4px" }}>
								<GetAppIcon
									style={{
										color: "white",
										fontSize: "1.2rem",
										position: "relative",
										bottom: "0em",
									}}
								/>
							</IconButton>
							<IconButton style={{ outline: "none", padding: "4px" }}>
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
				</div>
			) : null}
		</div>
	);
};

export default Conatiner;
