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
import "./style/style.css";

const Conatiner = (props) => {
	let image=props.image;
	let height=props.height;
	// eslint-disable-next-line
	const [opacity, setOpacity] = useState(0);
	// var randomArray=["200px","230px","300px","250px","270px","350"];
	// height=`${randomArray[Math.floor(Math.random()*randomArray.length)]}`;
	return (
		<div
			className="imglogin"
			style={{ position: "relative",height:{height}}}
			onMouseEnter={(e) => {
				e.preventDefault();
				setOpacity(1);
			}}
			onMouseLeave={(e) => {
				e.preventDefault();
				setOpacity(0);
			}}
			// onClick={()=>{
			// 	console.log(height);
			// }}
		>
			<img
				src={image}
				alt=""
				height={height}
				// height={randomArray[Math.floor(Math.random()*randomArray.length)]}
				// onClick={() => {
				// 	console.log(height);
				// }}
				style={{borderRadius: "1em"}}
			/>

			<div
				className="details"
				style={{opacity: `${opacity}`}}>
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "space-between",
						// position: "relative",
						// left: "-7.5em",
					}}
				>
					{opacity ? (
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
								// width: "100%",
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
						</div>
					) : null}
					{opacity ? (
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
								// width: "100%",
								// position: "relative",
								// left: "8em",
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
					// position: "absolute",
					// height: `8vh`,
					opacity: `${opacity}`,
					// zIndex: "1000",
					top:"77%",
					// bottom: "-6vh",
					// left: "70%",
					// width: "100%",
				}}
			>
				<div
					style={{
						// display: "flex",
						// justifyContent:"space-between",
						// width: "100%",
						height:"100%",
						paddingLeft:"7%",
						// position: "relative",
						// left: "-8.5em",
					}}
				>
					{opacity ? (
						<div className="bottom">
							<div className="end">
								<Link to="/boardDisplay">
									<Button
										variant="contained"
										style={{
											borderRadius: "1em",
											// position: "relative",
											width:"100%",
											// bottom: "0.5rem",
											outline: "none",
											textTransform:"capitalize",
											// fontSize: ".7rem",
										}}
									>
										<ArrowUpward
											style={{
												transform: "rotate(45deg)",
												// marginRight: ".5em",
												width:"50%",
												fontSize: "1rem",
											}}
										/>
										Link
									</Button>
								</Link>
							</div>
							<div className="end" >
								<IconButton style={{ outline: "none",padding:"4px" }}>
									<GetAppIcon
										style={{
											color: "white",
											fontSize: "1.2rem",
											position: "relative",
											bottom: "0em",
										}}
									/>
								</IconButton>
								<IconButton style={{ outline: "none",padding:"4px" }}>
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
