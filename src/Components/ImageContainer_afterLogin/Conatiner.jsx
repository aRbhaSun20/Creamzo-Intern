import { Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
	AddCircleOutline,
	ArrowUpward,
	FavoriteBorder,
	Share,
} from "@material-ui/icons";

const Conatiner = ({ image, height }) => {
	const [opacity, setOpacity] = useState(0);
	return (
		<div style={{ position: "relative" }}>
			<img src={image} alt="" style={{ height: `100%`, borderRadius: "2em" }} />
			<div
				className="details"
				style={{
					position: "absolute",
					height: `94%`,
					backgroundColor: `rgba(28,28,28,${opacity})`,
					zIndex: "1000",
					top: ".5em",
					left: ".5em",
					width: "20em",
					borderRadius: "2em",
				}}
				onMouseEnter={(e) => {
					e.preventDefault();
					setOpacity(0.2);
				}}
				onMouseLeave={(e) => {
					e.preventDefault();
					setOpacity(0);
				}}
			>
				<div
					style={{
						display: "flex",
						width: "auto",
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
									marginRight: "1em",
									marginTop: ".5em",
									position: "relative",
									left: "3em",
									outline: "none",
								}}
							>
								<FavoriteBorder
									style={{
										color: "white",
										fontSize: "2.5rem",
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
								left: "9.3em",
							}}
						>
							<IconButton
								variant="contained"
								style={{
									borderRadius: "1em",
									marginRight: "1em",
									marginTop: ".5em",
									outline: "none",
								}}
							>
								<AddCircleOutline
									style={{ color: "white", fontSize: "2.5rem" }}
								/>
							</IconButton>
						</div>
					) : null}
				</div>

				{opacity ? (
					<div
						className="bottom"
						style={{
							display: "flex",
							width: "20em",
							alignItems: "center",
							position: "absolute",
							justifyContent: "space-between",
							bottom: ".3em",
							marginLeft: "1em",
						}}
					>
						<Button
							variant="contained"
							style={{
								borderRadius: "1em",
								position: "relative",
								bottom: "0rem",
								outline: "none",
							}}
						>
							<ArrowUpward
								style={{ transform: "rotate(45deg)", marginRight: ".5em" }}
							/>
							Link
						</Button>
						<div
							className="end"
							style={{ position: "relative", left: "-1.5em" }}
						>
							<IconButton style={{ outline: "none" }}>
								<GetAppIcon
									style={{
										color: "white",
										fontSize: "2rem",
										position: "relative",
										bottom: "0em",
										left: ".5em",
									}}
								/>
							</IconButton>
							<IconButton style={{ outline: "none" }}>
								<Share
									style={{
										color: "white",
										fontSize: "2rem",
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
	);
};

export default Conatiner;
