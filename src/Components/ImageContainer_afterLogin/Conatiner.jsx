import { Button, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Conatiner = ({ image, height }) => {
	const [opacity, setOpacity] = useState(0);
	return (
		<div style={{ position: "relative" }}>
			<img src={image} alt="" style={{ height: `${height}em` }} />
			<div
				className="details"
				style={{
					position: "absolute",
					height: `${height}em`,
					backgroundColor: `rgba(28,28,28,${opacity})`,
					zIndex: "1000",
					top: "0",
					width: "29em",
					margin: "1em",
					borderRadius: "1em",
				}}
				onMouseEnter={(e) => {
					e.preventDefault();
					setOpacity(0.5);
				}}
				onMouseLeave={(e) => {
					e.preventDefault();
					setOpacity(0);
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
						<Button
							variant="contained"
							color="secondary"
							style={{
								borderRadius: "1em",
								marginRight: "1em",
								marginTop: "1em",
							}}
						>
							Save
						</Button>
					</div>
				) : null}
				{opacity ? (
					<div
						className="bottom"
						style={{
							display: "flex",
							width: "27em",
							alignItems: "center",
							position: "absolute",
							justifyContent: "space-between",
							bottom: ".3em",
							marginLeft: "1em",
						}}
					>
						<Typography variant="subtitle1" style={{ color: "white" }}>
							Image Name
						</Typography>
						<div className="end">
							<IconButton>
								<GetAppIcon style={{ color: "white" }} />
							</IconButton>
							<IconButton>
								<MoreHorizIcon style={{ color: "white" }} />
							</IconButton>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Conatiner;
