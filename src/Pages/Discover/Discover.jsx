import React from "react";
import "../../Components/Discover/style/style.css";
import Grid from "@material-ui/core/Grid";
import defaultImage from "./assets/defaultExplore.jpg";
import style from "../Profile/style/MyUploads.module.css";
const Discover = () => {
	let arr = [
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Animals" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{
			img: { defaultImage },
			name: "Travel",
		},
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
	];
	return (
		<div
			className="discover-container"
			style={{ paddingTop: "2em", paddingBottom: "5em" }}
		>
			<h1 className="title-item">Discover Creamzo</h1>

			<Grid className={style.gridContainer} container spacing={2}>
				{arr.map((image, index) => (
					<Grid className="grid-item" item xs={2} key={index}>
						<img className="discoverImage" src={defaultImage} alt="discover" />

						<div className="grid-item-title"> {image.name} </div>
					</Grid>
				))}
			</Grid>
		</div>
	);
};
export default Discover;
